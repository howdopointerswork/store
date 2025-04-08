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

	imgSrc.attr('src', 'img/' + display);

	$('figcaption').html(txt[num]);



};


function txtEle(ele, txt, app) {

	$(ele, {

		text: txt

	}).appendTo(app);



}




async function loadItems(){

	let url = '#';

	
	const resp = await fetch('http://localhost:3000/item');
	const items = await resp.json();


	const arr = ['xs', 's', 'm', 'l', 'xl', 'shirts', 'outdoor', 'pants', 'foot', 
'men', 'women', 'asc', 'des', 'min', 'max', 'apply'];
	
	$('#apply').click(function(){ 

		console.log('clicked');

		for(let box of arr) {


			if($('#' + box).prop('checked')){

				console.log(box);
				//add here
			}
		}

	});



	
	items.forEach(item => {

		const i = item.id;
		console.log(i);
		let inc=(i+2)*(i+2)+i;
		let itemDiv = inc*inc;
		let aDiv = inc*inc*inc;

		//algorithm to avoid collisions
		//(i+2)^2 + i
		
		//add where condition for filters

	//	if(item.type == 'M'){
		//condense
			$('<div>', {

				id: itemDiv,

				class: 'item'

			}).appendTo('#shop');

			$('<a>', {

				href: url,
				id: aDiv

			}).appendTo('#'+ itemDiv);

			$('<img>', {

				src: 'img/' + item.src + '.png'

			}).appendTo('#' + aDiv);


			txtEle('<h3>', item.name, '#' + aDiv);
			txtEle('<p>', '$' + item.price, '#' + aDiv);
			txtEle('<p>', item.category, '#' + aDiv);

			let gen = (item.type == 'M' ? 'Men' : 'Women');

			txtEle('<p>', gen, '#' + aDiv);

			if(parseInt(item.sale) == 1) {

				txtEle('<p>', sale, '#' + aDiv);
			}

			let sizeCheck = '';
			const itemSize = parseInt(item.size);
			const arr = ['XS', ' S', ' M', ' L', ' XL'];

			for(let i=0; i<itemSize+1; ++i) {

				sizeCheck += arr[i];
			}

			txtEle('<p>', sizeCheck, '#' + aDiv);
			txtEle('<p>', 'ID: ' + item.id, '#' + aDiv);

			//}


	});

		$('#shop').css('display', 'flex');
		$('#shop').css('flex-wrap', 'wrap');
};









script.onload = function(){


	$(document).ready(function(){



		console.log("Loaded");

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


		loadItems();

	});
};
document.head.appendChild(script);
