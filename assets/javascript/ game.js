var game = {
	mysteryWord:"",
	mysteryWordOptions: ["penguin","pug","antelope","bison","elephant", "macaw", "monkey", "dolphin"],
	userGuesses: 10,
	guessesLeft: "",
	wins: 0,
	losses: 0,
	
	
	getRandomWord: function(){
		var randomIndex = Math.random()* this.mysteryWordOptions.length;

		randomIndex = Math.floor(randomIndex);

		return this.mysteryWordOptions[randomIndex];
	},

	Reset: function(){
		thi
	}








}

game.Reset();