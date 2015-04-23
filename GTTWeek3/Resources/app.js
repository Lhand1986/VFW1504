var win = Ti.UI.createWindow({
	backgroundColor: "#f2f2f2",
	layout: "vertical"
});

//collection of images
//DON'T WRITE ARRAY THIS WAY
//var myImages = ["brook.jpg", "beach.jpg"];

//getfile, telling titanium to get file information, resourcesDirectory, telling it where it needs to go, imgs, telling it which folder
var imgs = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "imgs");
//Building an array from the object, imgs, that was created previously
var myImages = imgs.getDirectoryListing();

console.log(myImages);

for(i=0; i<myImages.length; i++){
	var myImage = Ti.UI.createImageView({
		image: "imgs/" + myImages[i],
		width: 200
	});
	win.add(myImage);
}



win.open();
