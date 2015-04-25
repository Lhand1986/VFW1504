var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imageFiles = imagesFolder.getDirectoryListing();

console.log(imageFiles);

var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var rowCount = 4;
var margin = 10;
var trueCanvasWidth = pHeight - pWidth;
var size = trueCanvasWidth / rowCount;



var mainWin = Ti.UI.createWindow({
	backgroundColor: "#fff",
	layout: "horizontal"
});

var border = Ti.UI.createView({
	backgroundColor: "#cecece",
	height: 1,
	width: pWidth,
	top: 20
});

var viewContainer = Ti.UI.createScrollView({
	top: 0, //0 because of the horizontal layout
	width: pWidth,
	contentWidth: pWidth,
	height: pHeight - border.height - border.top,
	showVerticleScrollIndicator: true,
	backgroundColor: "#fef",
	layout: "horizontal"
});

for(var i=0; i<imageFiles.length; i++){
	var view = Ti.UI.createView({
		backgroundColor: "#33CCFF",
		top: margin,
		left: margin,
		width: size,
		height: size,
		borderRadius: 10
	});
	var thumb = Ti.UI.createImageView({
		image: "images/" + imageFiles[i],
		top: 0,
		width: view.width*2
	});
	view.add(thumb);
	viewContainer.add(view);
}

mainWin.add(border);
mainWin.add(viewContainer);
mainWin.open();
