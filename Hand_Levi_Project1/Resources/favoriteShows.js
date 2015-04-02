//Initialize array variable televisionShows
var televisionShows = ["1. Firefly", "2. Doctor Who", "3. Dollhouse", "4. Fringe", "5. Grimm", "6. Sherlock", "7. QI (Quite interesting)"];
//Initialize variable i for array placeholder, assign variable of 0
var i = 0;
//Change textLabel.text to array televisionShows
textLabel.text = televisionShows[i];
//Creating a function call for the event listener
var displayItemsLeft = function(){
	//If statement checking to see if i is strictly equal to 0
		if(i === 0){
			//Change variable i to 6
		i = 6;
	}else{
		//Decrement i variable
		i--;
	}
	//Assign array televisionShows to textLabel.text with the variable i in the place of the array
	textLabel.text = televisionShows[i];

};
//Creating a function call for the event listener
var displayItemsRight = function(){
	//If statement checking to see if i is strictly equal to 6
	if(i === 6){
		//Change variable i to 0
		i = 0;
	}else{
		//Increment i variable
		i++;
	}
	//Assign array televisionShows to textLabel.text with the variable i in the place of the array
	textLabel.text = televisionShows[i];
};
//Assigning event listeners for user input to left and right buttons
buttonViewLeft.addEventListener("click", displayItemsLeft);
buttonViewRight.addEventListener("click", displayItemsRight);
