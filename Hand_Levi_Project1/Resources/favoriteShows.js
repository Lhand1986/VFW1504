var televisionShows = ["1. Firefly", "2. Doctor Who", "3. Dollhouse", "4. Fringe", "5. Grimm", "6. Sherlock", "7. QI (Quite interesting)"];

var i = 0;
textLabel.text = televisionShows[i];

var displayItemsLeft = function(){
		if(i === 0){
		i = 6;
	}else{
		i--;
	}
	textLabel.text = televisionShows[i];

};

var displayItemsRight = function(){
	if(i === 6){
		i = 0;
	}else{
		i++;
	}
	textLabel.text = televisionShows[i];
};
buttonViewLeft.addEventListener("click", displayItemsLeft);
buttonViewRight.addEventListener("click", displayItemsRight);
