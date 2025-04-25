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

}


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

	console.log('current is: ' + current);

	switch(current){

		case 0:
			console.log('both empty');
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



script.onload = function(){
	

	$(document).ready(function(){

		let click=0;
		const arr = [];
		const checked = new Map();
		let pressed = false;
		const ids = ['0', '1', '2', '3', '4', 'Shirts', 'Outdoorwear', 'Pants', 'Footwear', 
'M', 'F', 'asc', 'des'];

		console.log("Loaded");
		

		getItems().then(items => {

			items.forEach(item => {


				arr.push(item);
				console.log('item: ' + item.id);

			});

			populate(arr, true, checked);
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
