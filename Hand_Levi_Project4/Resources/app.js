var mainWin = Ti.UI.createWindow({
	backgroundColor: "#808080",
	title: "topic/theme"
});

//Require Launch page, Gallery page, Data page, and Custom page

//Create a navigatio window protocol
var navWin = Ti.UI.iOS.createNavigationWindow({
	//Assign the mainWin window to the nav window
	window: mainWin
});

navWin.open();
