var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var numSquares = 6;
var colors = setRandomColors(numSquares);

easy.addEventListener("click", function(){

	easy.classList.add("selected");
	hard.classList.remove("selected");

	newColors.textContent = "New Colors";
	//colors array to 3//generate Random colors
	numSquares = 3;
	colors = setRandomColors(numSquares);

	

	//pick new color
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	//reset squares
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}	

		else{

			 squares[i].style.display =  "none";

		}
	}
	header.style.backgroundColor = "#232323";
	messageDisplay.textContent = "";


});

//hard
hard.addEventListener("click", function(){

	easy.classList.remove("selected");
	hard.classList.add("selected");

	newColors.textContent = "New Colors";
	//colors array to 3//generate Random colors
	numSquares = 6;
	colors = setRandomColors(numSquares);

	

	//pick new color
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	//reset squares
	for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display =  "block";	
	}
	header.style.backgroundColor = "#232323";
	messageDisplay.textContent = "";


}); 





var squares = document.querySelectorAll(".square");
//pick a ramdom color
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");

var messageDisplay = document.querySelector("#message"); 
colorDisplay.textContent = pickedColor;

//play again

var isNewGame = false;

//header change
var header = document.querySelector("#header");

//newColors button
var newColors = document.querySelector("#newColors");
newColors.addEventListener("click" , function(){

	newColors.textContent = "New Colors";
	//generate all new Colors
	colors = setRandomColors(numSquares);
	//pick a new color
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	//change colors on page
	for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	}
	header.style.backgroundColor = "#232323";
	messageDisplay.textContent = "";

});

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

	// add click listeners to squares
	squares[i].addEventListener("click", function(){

		//get color clicked

		var grabbedColor = this.style.backgroundColor;

		//compare with picked color
		if(grabbedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			correctColor(grabbedColor);
			header.style.backgroundColor = pickedColor;
			newColors.textContent = "PlayAgain?";
		}

		else{
			//alert("Incorrect Color picked");
			//set to backgroung color
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}

	});

}

function correctColor(colors){
		for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = pickedColor;
	}
}

function pickColor(){

	//pick a random number
	var randomNumber = Math.floor(Math.random() * colors.length);
	//return color
	return colors[randomNumber];
}

function setRandomColors(num){
	
	//make an array
	var arr = []

	//add random colors to array
	for (var i = 0 ; i < num; i++) {
		//get random color
		
		//push into array
		arr.push(randomColor());
	}

	//return array
	return arr;

}

function randomColor(){
	//pick a red from 0 to 255
	var red = Math.floor(Math.random() * 256);
	//pick a green from 0 to 255
	var green = Math.floor(Math.random() * 256);
	//pick a blue from 0 to 255
	var blue = Math.floor(Math.random() * 256);

	var returnedColor = "rgb(" + red + ","+ " "+green+","+ " " +blue+ ")";
	return returnedColor;
}
