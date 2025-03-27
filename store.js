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


function loadItems(page, filter){

	let url = '#';
	let src = 'img/item1.png';

	for(let i=0; i<8; ++i){

		$('<div>', {

			id: i*i,

			class: 'item'

		}).appendTo('#shop');

		$('<a>', {

			href: url,

			id: i*i*i

		}).appendTo('#'+i*i);

		$('<img>', {

			src: src

		}).appendTo('#' + i*i*i);

		$('<h3>', {

			text: 'item ' + i

		}).appendTo('#'+i*i*i);

		$('<p>', {

			text: '$' + i

		}).appendTo('#'+i*i*i);



	//	('#item').attr('class', 'item');

	};

		$('#shop').css('display', 'flex');
		$('shop').css('flex-wrap', 'wrap');
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
			$('.popup').css('visibility', 'visible');


		});

		$('#mens').mouseout(function(){

			$('.popup').eq(0).css('visibility', 'hidden');
		});


		loadItems(0,0);

	});
};
document.head.appendChild(script);