//Create main window
var mainWin = Ti.UI.createWindow({
	backgroundColor: "#333333",
	title: "Doctor Who"
});

//Create a navigation window protocol
var navWin = Ti.UI.iOS.createNavigationWindow({
	//Assign the mainWin window to the nav window
	window: mainWin
});

//Open the nav window
navWin.open();
//Create variables to require the loading of the subsequent .js files
var loadLaunch = require("launchPage");
var loadGallery = require("galleryPage");
var loadData = require("dataPage");
var loadCustom = require("customPage");
