// Create main window
var mainWin = Ti.UI.createWindow({
	//Assign a title
	title: "Firefly",
	//Assign a background color
	backgroundColor: "#808080"
});


//Opening the main window as a navigation window
mainWin.open();
//Load the additional .js file Firefly.js
var loadFile = require("Firefly");