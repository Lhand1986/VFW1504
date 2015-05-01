var galleryWindow = Ti.UI.createWindow({
	backgroundColor: "#909090",
	title: "Gallery"
});

//Utilizing the Filesystem titanium function to point titanium at the resources directory, images folder
var galleryImg = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "galleryImages");
//Assigning the filenames in the images folder to an array
var imageFiles = galleryImg.getDirectoryListing();

console.log(imageFiles);

var imageCounter = 0;

var randomBtn = Ti.UI.createView({
	backgroundColor: "#333333",
	height: 65,
	bottom: 0
});
var randomText = Ti.UI.createLabel({
	text: "Random Image",
	font: {fontSize: 20, fontFamily: "Arial", fontWeight: "bold"},
	textAlign: "center",
	color: "#e6e6e6"
});

var view = Ti.UI.createView({
	backgroundColor: "#909090"
});

var currentImage = Ti.UI.createImageView({
	image: "galleryImages/" + imageFiles[imageFiles.length - 1],
	top: "25%",
	width: view.width
});

function displayImage(){
	currentImage.image = "galleryImages/" + imageFiles[0];
}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


randomBtn.addEventListener("click", function(event){
	shuffle(imageFiles);
	displayImage();
	imageFiles.splice(0, 1);
	if(imageFiles.length === 0){
		imageFiles = galleryImg.getDirectoryListing();
	}
});

exports.galleryCall = galleryWindow;
randomBtn.add(randomText);
galleryWindow.add(currentImage, randomBtn);
