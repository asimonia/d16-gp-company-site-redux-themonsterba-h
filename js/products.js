var costumes = [
	{
		"name": "Zombie Banana",
		"gender": "Unisex",
		"price": "$100",
		"description": "Classic Halloween character gets a fruity spin",
		"image": "/images/banana.png"
	},
	{
		"name": "Pokeball",
		"gender": "Unisex",
		"price": "$200",
		"description": "Gotta catch em all",
		"image": "/images/pokeball.jpg"
	},
	{
		"name": "Rapper",
		"gender": "Male",
		"price": "$300",
		"description": "Be the star of the show",
		"image": "/images/rapper.jpg"	
	},
	{
		"name": "R2D2",
		"gender": "Dog",
		"price": "$50",
		"description": "Everyone's favorite robot",
		"image": ""
	},
	{
		"name": "Earthworm",
		"gender": "Unisex",
		"price": "$100",
		"description": "Don't be early..",
		"image": "/images/earthworm.png"
	},
	{
		"name": "Poop Emoji",
		"gender": "Unisex",
		"price": "$200",
		"description": "Your favorite emoji has come to life!",
		"image": "/images/poop.jpg"	
	},
	{
		"name": "Bubble Wrap",
		"gender": "Unisex",
		"price": "$100",
		"description": "Dude, where's my bubble wrap costume?",
		"image": "/images/bubble.jpg"
	},
	{
		"name": "Cat Sushi",
		"gender": "Cat",
		"price": "$50",
		"description": "Non-edible",
		"image": "images/catsushi.jpeg"
	},
	{
		"name": "Dracula",
		"gender": "Hedgehog",
		"price": "$50",
		"description": "Beware of this vampire",
		"image": "/images/dracula-hedgehog.jpeg"	
	}	
]

function	buildDom() {
	var emptyString = '';

	 for (i = 0; i < costumes.length; i++) { 

	 		var CostumeName = costumes[i].name;
	 		var CostumeDescription = costumes[i].description;
	 		var CostumePrice = costumes[i].price;
	 		var CostumeURL = costumes[i].URL;


	 		var CostumeCard = document.getElementById("product-container");




	 }
}











