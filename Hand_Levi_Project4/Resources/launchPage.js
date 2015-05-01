var launchView = Ti.UI.createView({
});

var galleryLabel = Ti.UI.createLabel({
	text: "Gallery",
	id: "gallery",
	top: 0,
	height: 75,
	width: "100%",
	backgroundColor: "#ffffff",
	font: {fontSize: 22, fontFamily: "Helvetica", fontWeight: "bold"},
	color: "#333",
	textAlign: "center"
});
var dataLabel = Ti.UI.createLabel({
	text: "Data",
	id: "data",
	top: galleryLabel.height,
	height: 75,
	width: "100%",
	backgroundColor: "blue",
	font: {fontSize: 22, fontFamily: "Helvetica", fontWeight: "bold"},
	color: "#333",
	textAlign: "center"
});
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
var footerLabel = Ti.UI.createLabel({
	text: "VFW Term 1504 Section 01 // Levi Hand",
	bottom: "25%",
	height: 30,
	font: {fontSize: 13, fontFamily: "Times New Roman"},
	textAlign: "center",
	color: "#e6e6e6"
});

var openPage = function(dataSource){

	if(dataSource.id === "gallery"){
		navWin.openWindow(loadGallery.galleryCall);
	}else if(dataSource.id === "data"){
		navWin.openWindow(loadData.dataCall);
	}else if(dataSource.id === "custom"){
		navWin.openWindow(loadCustom.customCall);
	}
};

galleryLabel.addEventListener("click", function(){
	var galleryPage = require("galleryPage");
});

launchView.addEventListener("click", function(event){
	console.log(event.source.id);
	if(event.source.id != null){
		openPage(event.source);
	}
});

launchView.add(galleryLabel, dataLabel, customLabel, footerLabel);
mainWin.add(launchView);