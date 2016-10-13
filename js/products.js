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

		"image": "/images/r2d2.jpg"
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
	},
	{
		"name": "Receipt",
		"gender": "Unisex",
		"price": "$110",
		"description": "For your favorite coupon lover",
		"image": "/images/receipt.jpg"	
	},
	{
		"name": "Green Man",
		"gender": "Unisex",
		"price": "$70",
		"description": "Keep off the grass",
		"image": "/images/green.jpg"	
	}, 
	{
		"name": "Rollercoaster",
		"gender": "Group",
		"price": "$250",
		"description": "Have rollercoaster fun without leaving the ground!",
		"image": "/images/rollercoaster.png"	
	}	
]


	 for (i = 0; i < costumes.length; i++) { 

	 		var currentCostume = costumes[i];
	 		var costumeName = "<h2 class='name'>" + currentCostume.name + "</h2>";
	 		var costumeDescription = "<h3 class='description'>" + currentCostume.description + "</h3>"
	 		var costumeGender = "<h3 class='gender'>" + currentCostume.gender + "</h3>"
	 		var costumePrice = "<h3 class='price'>" + currentCostume.price + "</h3>"
	 		var costumeURL = "<img class='pics' src=' " + currentCostume.image + " '>"


	 		var CostumeContainer = document.getElementById("product-container");

	 		CostumeContainer.innerHTML += "<div class='all'>" + costumeName + costumeURL + costumeDescription + costumePrice + costumeGender + "</div>";
}








