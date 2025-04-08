const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const express = require('express');
const path = require('path');
const cors = require('cors');

var script = document.createElement('script');

script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";
script.type = "text/javascript";


const ex = express();
const port = 3000;

//for different/pre-existing domains
ex.use(cors());

//serve html
ex.use(express.static(__dirname));

console.log("here");

//promise for getting entries from items
ex.get('/item', async (req, res) => {

	try{
		//get all entries from items

		const items = await prisma.item.findMany();
		res.json(items);

	} catch(error){

		res.status(500).json({ error: 'Error getting data' });
	}

});

//listen
ex.listen(port, () => {

	console.log("Server is running");


	

});


//misc functions

async function lab(){

		const names = ['Plain Tee', 'Tank Top', 'Raincoat', 'Cargo Pants', 'Winter Jacket', 'Rain Boots'];
		const prices = [15, 7, 20, 20, 40, 15];
		const sizes = [0, 0, 3, 4, 3, 0];
		const categories = ['Shirts', 'Shirts', 'Outdoorwear', 'Pants', 'Outdoorwear', 'Footwear'];
		let gender = 'M';
		let diff = 0;



		//0 for size is all
		//Anything else is "up to n"
	
		for(let i=0; i<names.length*2; ++i){

			let source = 'item' + (i+1);

			if(i >= names.length) {

				source = 'item' + ((i-names.length)+1);
			}

			const newItem = await prisma.Item.create({

			


				data: {

					name: names[i-diff],
					price: prices[i-diff],
					size: sizes[i-diff],
					sale: false,
					category: categories[i-diff],
					type: gender,
					src: source

				}
			});

			if(i == names.length-1){

				diff = names.length;
				gender = 'F';
			}
		}

}