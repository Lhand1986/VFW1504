//Create a view to hold objects
var launchView = Ti.UI.createView({
});

//Create a label for the gallery button
var galleryLabel = Ti.UI.createLabel({
	text: "Gallery",
	id: "gallery",
	top: 0,
	height: 75,
	width: "100%",
	backgroundColor: "#003b6f",
	font: {fontSize: 22, fontFamily: "Helvetica", fontWeight: "bold"},
	color: "white",
	textAlign: "center"
});
//Create a label for the data button
var dataLabel = Ti.UI.createLabel({
	text: "Data",
	id: "data",
	top: galleryLabel.height,
	height: 75,
	width: "100%",
	backgroundColor: "#ffffff",
	font: {fontSize: 22, fontFamily: "Helvetica", fontWeight: "bold"},
	color: "#333",
	textAlign: "center"
});
//Create a label for the custom button
var customLabel = Ti.UI.createLabel({
	text: "Custom Page",
	id: "custom",
	top: galleryLabel.height * 2,
	height: 75,
	width: "100%",
	backgroundColor: "green",
	font: {fontSize: 22, fontFamily: "Helvetica", fontWeight: "bold"},
	color: "#333",
	textAlign: "center"
});
//Create the footer information for this project
var footerLabel = Ti.UI.createLabel({
	text: "VFW Term 1504 Section 01 // Levi Hand",
	bottom: "25%",
	height: 30,
	font: {fontSize: 13, fontFamily: "Times New Roman"},
	textAlign: "center",
	color: "#e6e6e6"
});
//Create a function designed to work with event propagation to open the different buttons depending on which is clicked
var openPage = function(dataSource){
	
	//Logic to determine which object the user has selected
	if(dataSource.id === "gallery"){
		navWin.openWindow(loadGallery.galleryCall);
	}else if(dataSource.id === "data"){
		navWin.openWindow(loadData.dataCall);
	}else if(dataSource.id === "custom"){
		navWin.openWindow(loadCustom.customCall);
	}
};

//Add event propagation to the launch view
launchView.addEventListener("click", function(event){
	//Logic to determine if the user is clicking on one of the objects
	if(event.source.id != null){
		openPage(event.source);
	}
});

//Add the labels to the view
launchView.add(galleryLabel, dataLabel, customLabel, footerLabel);
//Add the view to the main window (splash page)
mainWin.add(launchView);