//variables

var randomNumber;
var totalScore = 0;
var wins = 0;
var losses = 0;
var random;
var total;


//Games Start




$(document).ready(function(){

	//Initialize Game
	resetGame();	

	//Add Event Listeners
	$(".gem-buttons input").on("click", function(){
	totalScore = totalScore + parseInt($(this).val());
	 $("#total-score").text(totalScore);
	 scores();
	});




	//####################################
	//##### Start Functions Section ######

	//Game Reset
	function resetGame(){
		randomNumber = getRandomIntInclusive(19,120);
		// debugger;
		$.each($(".gem-buttons input"), function(index, element){
			// debugger;
			$(element).val(getRandomIntInclusive(1,12));
		});

		totalScore = 0;
		
		$("#total-score").text(totalScore);
		$("#random-number").text(randomNumber);
	};

	//Updates Random Number
	function getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min; 
	}

	//Check Score
	function scores(){
		total 	= parseInt($("#total-score").text());
		random 	= parseInt($("#random-number").text());

		//On Win
		if (total == random) {
			wins++;
			$("#wins").text(wins);
			resetGame();
		}

		//On Loss
		if (total > random) {
			losses++;
			$("#losses").text(losses);
			resetGame();
		}

	}

	//###### End Functions Section #######
	//####################################

}); //END DOC READY