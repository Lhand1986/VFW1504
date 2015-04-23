var mainWin = Ti.UI.createWindow({
	backgroundColor: "#fff",
	layout: "horizontal"
});

var newImage = Ti.UI.createImageView({
	image: "images/ksp.jpg",
	left: 10,
	right: 10,
	top: 20,
	borderRadius: 10
});

mainWin.add(newImage);
mainWin.open();
