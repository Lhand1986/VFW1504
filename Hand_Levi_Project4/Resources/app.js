var mainWin = Ti.UI.createWindow({
	backgroundColor: "#333333",
	title: "Doctor Who"
});

//Require Launch page, Gallery page, Data page, and Custom page

//Create a navigatio window protocol
var navWin = Ti.UI.iOS.createNavigationWindow({
	//Assign the mainWin window to the nav window
	window: mainWin
});

navWin.open();
var loadLaunch = require("launchPage");
var loadGallery = require("galleryPage");
var loadData = require("dataPage");
var loadCustom = require("customPage");
