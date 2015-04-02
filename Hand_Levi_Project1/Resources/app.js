var mainWindow = Ti.UI.createWindow({
	title: "Project 1",
	backgroundColor: "#7BF"
});

var textView = Ti.UI.createView({
	backgroundColor: "#FFF",
	top: 40,
	left: 20,
	right: 20,
	bottom: 200
});

var textLabel = Ti.UI.createLabel({
	text: "Click either Next or Previous to find out what some of my favorite shows are.",
	font: {fontSize: 16, fontFamily: "AmericanTypewriter"},
	textAlign: "center",
	verticalAlign: "center",
});

var buttonViewLeft = Ti.UI.createView({
	backgroundColor: "#14ad80",
	height: 50,
	left: 20,
	bottom: 140,
	right: "60%"
});

var buttonViewRight = Ti.UI.createView({
	backgroundColor: "#14ad80",
	height: 50,
	right: 20,
	bottom: 140,
	left: "60%"
});

var buttonTextLeft = Ti.UI.createLabel({
	color: "#fff",
	font: {fontSize: 15, fontFamily: "Helvetica"},
	textAlign: "center",
	text: "Previous"
	
});

var buttonTextRight = Ti.UI.createLabel({
	color: "#fff",
	font: {fontSize: 15, fontFamily: "Helvetica"},
	textAlign: "center",
	text: "Next"
	
});


mainWindow.open();
mainWindow.add(textView, buttonViewLeft, buttonViewRight);
textView.add(textLabel);
buttonViewLeft.add(buttonTextLeft);
buttonViewRight.add(buttonTextRight);
var loadFile = require("favoriteShows");

