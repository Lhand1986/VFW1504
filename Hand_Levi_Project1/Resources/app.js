//Create main window
var mainWindow = Ti.UI.createWindow({
	//Assign a title to the window
	title: "Project 1",
	//Assign a background color
	backgroundColor: "#7BF"
});

//Create a view to hold text
var textView = Ti.UI.createView({
	//Assign background color
	backgroundColor: "#FFF",
	//Restricting the size of the View
	//Adding a 40 pixel gap on the top of the View
	top: 40,
	//Add a 20 pixel gap on the left
	left: 20,
	//Add a 20 pixel gap on the right
	right: 20,
	//Add a 200 pixel gap on the bottom
	bottom: 200
});
//Create the label placeholder
var textLabel = Ti.UI.createLabel({
	//Initialize a null string value
	text: "",
	//Set the font styling
	font: {fontSize: 16, fontFamily: "AmericanTypewriter"},
	//Align text to the center of the document
	textAlign: "center",
	//Align text vertically to the center
	verticalAlign: "center",
});
//Create a view for the left button
var buttonViewLeft = Ti.UI.createView({
	//Assign a background color
	backgroundColor: "#14ad80",
	//Restricting the size of the button
	//Add a 50 pixel gap on the top
	height: 50,
	//Add a 20 pixel gap on the left
	left: 20,
	//Add a 140 pixel gap from the bottom
	bottom: 140,
	//Add a 60% gap on the right side of the button
	right: "60%"
});
//Create a view for the right button
var buttonViewRight = Ti.UI.createView({
	//Assign a background color
	backgroundColor: "#14ad80",
	//Restricting the size of the button
	//Add a 50 pixel gap on the top
	height: 50,
	//Add a 20 pixel gap on the right
	right: 20,
	//Add a 140 pixel gap from the bottom
	bottom: 140,
	//Add a 60% gap on the left side of the button
	left: "60%"
});
//Initialize text for the left button
var buttonTextLeft = Ti.UI.createLabel({
	//Assign the color of the text
	color: "#fff",
	//Assign font styling
	font: {fontSize: 15, fontFamily: "Helvetica"},
	//Align the text to the center
	textAlign: "center",
	//Assign the text
	text: "Previous"
	
});
//Initialize text for the right button
var buttonTextRight = Ti.UI.createLabel({
	//Assign the color of the text
	color: "#fff",
	//Assign font styling
	font: {fontSize: 15, fontFamily: "Helvetica"},
	//Align the text to the center
	textAlign: "center",
	//Assign the text
	text: "Next"
	
});

//Open the main window
mainWindow.open();
//Add the textView and buttons to the main window
mainWindow.add(textView, buttonViewLeft, buttonViewRight);
//Add the label to textView
textView.add(textLabel);
//Add text to buttonViewLeft
buttonViewLeft.add(buttonTextLeft);
//Add text to buttonViewRight
buttonViewRight.add(buttonTextRight);
//Assign a variable that will call the program to load the js file favoriteShows
var loadFile = require("favoriteShows");

