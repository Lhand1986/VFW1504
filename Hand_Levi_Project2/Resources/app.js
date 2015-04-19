// Create main window
var mainWindow = Ti.UI.createWindow({
	//Assign a title
	title: "StarCraft Leaders",
	//Assign a background color
	backgroundColor: "#dadada"
});

//Create a navigation window protocol
var navWindow = Ti.UI.iOS.createNavigationWindow({
	//Initialize mainWindow as the root level window
	window: mainWindow
});

//Opening the main window as a navigation window
navWindow.open();
//Load the additional .js file StarCraft_Leaders.js
var loadFile = require("StarCraft_Leaders");
