var script = document.createElement('script');


script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";
script.type = "text/javascript";


function change(display, num){

	let imgSrc = $('figure img');
	let txt = ["All new styles", "Introducing the Bloom Collection", "Limited Editions"];
	
	imgSrc.css('display', 'none');
	imgSrc.fadeIn(1000);
	imgSrc.css('display', 'visible');

	$('figcaption').css('display', 'none');
	$('figcaption').fadeIn(1000);
	$('figcaption').css('display', 'visible');

	if(num == 0) {

		$('#b1').css('color', 'red');
		$('#b2').css('color', 'white');
		$('#b3').css('color', 'white');
	}
	else if(num == 1) {
		$('#b2').css('color', 'red');
		$('#b1').css('color', 'white');
		$('#b3').css('color', 'white');

	}
	else if(num == 2){

		$('#b3').css('color', 'red');
		$('#b2').css('color', 'white');
		$('#b1').css('color', 'white');
	}

	imgSrc.attr('src', '../img/' + display);

	$('figcaption').html(txt[num]);



};


function txtEle(ele, txt, app) {

	$(ele, {

		text: txt

	}).appendTo(app);

};


function minMax(min, max): number{

	const min_ne = (min.val() != undefined && min.val() != '' && !isNaN(min.val()));
	const max_ne = (max.val() != undefined && max.val() != '' && !isNaN(max.val()));
	
	const min_e = min.val() == undefined || min.val() == '' || isNaN(min.val());
	const max_e = max.val() == undefined || max.val() == '' || isNaN(max.val());


	if(min_ne && max_ne){

		return 1;
	}
	else if(min_ne && max_e){

		return 2;
	}
	else if(min_e && max_ne){

		return 3;
	}
	
	return 0;
	
};

function inRange(current: number, value: number, min, max): boolean{


	switch(current){

		case 0:
			return true;


		case 1:

			if(value >= Number(min.val()) && value <= Number(max.val())){

				return true;
			}
			else{

				return false;
			}
		
		case 2:
			
			if(value >= Number(min.val())){

				return true;
			}
			else{

				return false;
			}
			

		case 3:
		
			if(value <= Number(max.val())){

				return true;
			}
			else{

				return false;
			}
			
		
		default:

			return false;
					
	}

	return false;
} 

//try typescript here
//then convert rest
function populate(data, pass: boolean, checked){

	//remove later
	let url: string = '#';

	console.log('populating..');

	console.log("Data: " + data);

	if(pass){

		if(checked.has('asc')){

			console.log('ascending');
			data.sort((a,b) => a.price - b.price);
		}
		
		if(checked.has('des')){

			console.log('descending');
			data.sort((a,b) => b.price - a.price);
		}

		if(checked.has('asc') && checked.has('des')){

			alert('only one of ascending or descending');
			$('#asc').prop('checked', false);
			$('#des').prop('checked', false);
			checked.delete('asc');
			checked.delete('des');
		}
		
		data.forEach(item => {
		
		const i = item.id;
		let inc=(i+2)*(i+2)+i;
		let itemDiv = inc*inc;
		let aDiv = inc*inc*inc;

		const cat = checked.has(item.category);
		const size = checked.has(item.size.toString());
		const type = checked.has(item.type);

		const nocheck = checked.size === 0;

		const exdes = checked.size === 1 && checked.has('des');
		const exasc = checked.size === 1 && checked.has('asc');

		if(nocheck || cat || size || type || exdes || exasc){
	
			if(inRange(minMax($('#min'), $('#max')), item.price, $('#min'), $('#max'))){
				

				$('<div>', {

					id: itemDiv,

					class: 'item'

				}).appendTo('#shop');

				$('<a>', {

					href: url,
					id: aDiv

				}).appendTo('#'+ itemDiv);

				$('<img>', {

					src: '../img/' + item.src + '.png'

				}).appendTo('#' + aDiv);


				txtEle('<h3>', item.name, '#' + aDiv);
				txtEle('<p>', '$' + item.price, '#' + aDiv);
				txtEle('<p>', item.category, '#' + aDiv);

				let gen = (item.type == 'M' ? 'Men' : 'Women');

				txtEle('<p>', gen, '#' + aDiv);

				if(item.sale) {

					txtEle('<p>', item.sale, '#' + aDiv);
				}

				let sizeCheck = '';
				const itemSize = item.size;
				const arr = ['XS', ' S', ' M', ' L', ' XL'];

				for(let i=0; i<itemSize+1; ++i) {

					sizeCheck += arr[i];
				}

				txtEle('<p>', sizeCheck, '#' + aDiv);
				txtEle('<p>', 'ID: ' + item.id, '#' + aDiv);
		}


	}
});


 }


	//data.length = 0;

};


function search(data){



		const srch = $('#search').val().toString().toLowerCase();
		const notEmpty = srch != undefined && srch.toString() != '';


	data.forEach(item => {

		const i = item.id;
		let inc=(i+2)*(i+2)+i;
		let itemDiv = inc*inc;
		let aDiv = inc*inc*inc;
		const url = '#';
//account for sizes as well
		if(notEmpty && (item.id.toString().toLowerCase().includes(srch) || 
			item.name.toLowerCase().includes(srch) || 
			item.size.toString().toLowerCase().includes(srch) ||
			item.category.toLowerCase().includes(srch) ||
			item.type.toLowerCase().includes(srch))){	

	$('<div>', {

			id: itemDiv,

			class: 'item'

		}).appendTo('#shop');

		$('<a>', {

			href: url,
			id: aDiv

		}).appendTo('#'+ itemDiv);

		$('<img>', {

			src: '../img/' + item.src + '.png'

		}).appendTo('#' + aDiv);


		txtEle('<h3>', item.name, '#' + aDiv);
		txtEle('<p>', '$' + item.price, '#' + aDiv);
		txtEle('<p>', item.category, '#' + aDiv);

		let gen = (item.type == 'M' ? 'Men' : 'Women');

		txtEle('<p>', gen, '#' + aDiv);

		if(item.sale) {

			txtEle('<p>', item.sale, '#' + aDiv);
		}

		let sizeCheck = '';
		const itemSize = item.size;
		const arr = ['XS', ' S', ' M', ' L', ' XL'];

		for(let i=0; i<itemSize+1; ++i) {

			sizeCheck += arr[i];
		}

		txtEle('<p>', sizeCheck, '#' + aDiv);
		txtEle('<p>', 'ID: ' + item.id, '#' + aDiv);	

	}

	});
};




async function getItems(){


	const resp = await fetch('http://localhost:3000/item');
	const items = await resp.json();
	
	return items;

};

async function getUsers(){

	const resp = await fetch('http://localhost:3000/user');
	const users = await resp.json();

	return users;
};

async function signUp(username: string, password: string, src: string, email: string){

	const user = {

		username: username,
		password: password,
		src: src,
		email: email,
		auth: 1
	}

	try{

		const res = await fetch('http://localhost:3000/user', {

		method: 'POST',
		
		headers: {
			
			'Content-Type': 'application/json'
											
		},
		
		body: JSON.stringify(user)

		});

		const data = await res.json();


		}
		
		catch(error){

			console.error("Error: ", error);
		}




}


async function authenticate(val: number, id: number){

	try{

		const res = await fetch(`http://localhost:3000/user/${id}/auth`, {

		method: "PUT",
		
		headers: { 

		"Content-Type": "application/json" },
		
		body: JSON.stringify({ auth: val })

		});

		const data = await res.json();
	}
	catch(error){

		console.error("Error:", error);
	}
	

}

async function loadPage(url: string){


	const res = await fetch(url);
	const content = await res.text();

	$('#all').empty();
	$('#all').html(content);

}

async function upload(event, auth){

	console.log('uploading...');

	if(auth){

		console.log('to change');
	}

}




//TO-DO

//Auth checking on server
//UI should respond accordingly
//Update using Express (put)

script.onload = function(){
	
	let auth, signup = false;
	let signout = true;

	$(document).ready(function(){

		let click = 0;
		
		const arr = [];
		const user_arr = [];
		const ids = ['0', '1', '2', '3', '4', 'Shirts', 'Outdoorwear', 'Pants', 'Footwear', 
'M', 'F', 'asc', 'des'];

		const checked = new Map();
		
		let pressed = false;
		let hold;
		let current;




		console.log("Loaded");



		try{
			getItems().then(items => {

				items.forEach(item => {

					arr.push(item);

				});

				populate(arr, true, checked);
			});
		}
		catch(error){

			console.error("Error: ",error);
		}


		try{
			getUsers().then(users => {

				users.forEach(user => {

					user_arr.push(user);
				});
			});
		}
		catch(error){

			console.error("Error: ", error);
		}



		console.log('users: ' + user_arr);

		$('#login').click(function(){

			console.log('log in');


			const check_user = ($('#username').val() != '' &&  $('#username').val() != undefined);
			const check_pw = ($('#password').val() != '' &&  $('#password').val() != undefined);
			
			//turn into function

			if((check_user && check_pw) && user_arr.length > 0){

				console.log('not empty');

				for(let user of user_arr){

					if($('#username').val().toString().toLowerCase() == user.username.toLowerCase() && $('#password').val().toString().toLowerCase() == user.password.toLowerCase()){

						auth = true;
						alert('log in successful');
						$('#drop').css('visibility', 'hidden');
						console.log("Current ID: " + user.id);
						authenticate(1, user.id);
						current = user;
						console.log('Authenticated: ' + user.auth);
						signout = false;
						$('#signout').css('visibility', 'visible');
						$('#upload').css('visibility', 'visible');
						break;
						//return to home screen as authenticated
					}
					
				};

				if(!auth){
					window.location.href = 'signup.html';
					//loadPage('signup.html');
				}

			}
			else{

				alert('bad');
				console.log('username: ' + $('#username').val());
				console.log('password: ' + $('#password').val());
			}
		});



	
		$('#gosignup').click(function(){

			window.location.href = 'signup.html';
			//loadPage('signup.html');


		});
		

		$('#signup').click(function(){

				console.log('clicked sign up');
			
				let check_username = $('#username_su').val() != '' && $('#username_su').val() != undefined;
				let check_password = $('#password_su').val() != '' && $('#password_su').val() != undefined;
				let check_email = $('#email').val() != '' && $('#email').val() != undefined;

				//validate to ensure no duplicates
				//ensure fields are not empty or undefined
				//post request

				//make checks into function
				if(user_arr.length > 0 && check_username && check_password && check_email){

					console.log('Legal');

					for(let user of user_arr){

						if($('#username_su').val().toString().toLowerCase() != user.username.toString().toLowerCase()){
							if($('#email').val().toString().toLowerCase() != user.email.toString().toLowerCase()){
								//sign out button?
								signUp($('#username_su').val().toString(), $('#password_su').val().toString(), 'none', $('#email').val().toString());
								alert('Sign Up Successful');
								
								console.log("Current ID: " + user.id);
								authenticate(1, user.id);
								current = user;
								console.log('Authenticated: ' + user.auth);
								
								window.location.href = 'store_home.html';

								//loadPage('store_home.html');
								auth = true;
								
								$('#drop').css('visibility', 'hidden');
								
								signout = false;
								
								$('#signout').css('visibility', 'visible');
								$('#upload').css('visibility', 'visible');


								
								break;
							}
							else{

								alert('Email already exists');
							}

						}
						else{
							//to be separated
							alert('Username already exists');
						}


					};

				}
				else{

					alert('Fill in all fields');
				}
	
		

			});

			

		$('#b1').click(function(){

			change('slide1.jpeg', 0);
		});

		$('#b2').click(function(){

			change('slide2.jpg', 1);
		});		

		$('#b3').click(function(){

			change('slide3.jpg', 2);

		});


		$('#mens').hover(function(){
			console.log("hovering");
			$('#popup').css('visibility', 'visible');


		});

		$('#mens').mouseout(function(){

			$('#popup').eq(0).css('visibility', 'hidden');
		});

		$('#acc > img').click(function(){

			if(signout){

				$('#drop').css('visibility', 'visible');

				console.log('clicked');
			}
		});

		$('#default').click(function(){

			if(signout){

				$('#drop').eq(0).css('visibility', 'hidden');
		
				console.log('click out');

		}
		
		});


		$('#signout').click(function(){

			auth = false;

			$('#signout').css('visibility', 'hidden');
			$('#upload').css('visibility', 'hidden');
			$('#drop').css('visibility', 'visible');

			console.log("Current ID: " + current.id);

			authenticate(0, current.id);
			
			console.log('Authenticated: ' + current.auth);

			current = null;
			
			$('#username').val('');
			$('#password').val('');

		});




	try{
		ids.forEach(id => {

			$('#' + id).click(function(){

				//check for min/max here
				if( $('#' + id).is(':checked') ){

					console.log('checked: ' + id);
					checked.set(id, ++click);
					console.log('checked size: ' + checked.size);

				}
				else{
					console.log('unchecked: ' + id);
					checked.delete(id);
					--click;
					console.log('checked size: ' + checked.size);

				}
			});



		});
	}
	catch(error){

		console.log('Error: ', error);
	}



		$('#apply').click(function(){

			console.log('pressed');

			//arr.length = 0;

			//need copy of array for modifying
			//clear shop and display that one
			$('#shop').empty();
			populate(arr, true, checked);

			ids.forEach(id => {

				if($('#' + id).prop('checked', true)){

					$('#' + id).prop('checked', false);
				}

			});

			checked.clear();
			console.log(click);
			//arr.length=0;

		});



		//const items = getItems(); //return from this function
		//populate(items, true);

		$('#submit').click(function(){
			console.log('searching...');
			$('#shop').empty();
			search(arr);
		});





	});



};

document.head.appendChild(script);
