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
/*
//For loop to add images to the screen
for(var i=0; i<imageFiles.length; i++){
	//Creating individual views for each of the images
	var view = Ti.UI.createView({
		backgroundColor: "#909090",
	});
	//Creating the thumbnail views to add to the parent view
	var image = Ti.UI.createImageView({
		//Calling the imageFiles array and pointing titanium to the proper directory to retrieve the files
		image: "galleryImages/" + imageFiles[i],
		//Assigning an ID value to each of the thumbnails
		id: 0,
		top: "25%",
		width: view.width
	});
};
*/
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
	console.log(imageFiles);
	imageFiles.splice(0, 1);
	if(imageFiles.length === 0){
		imageFiles = galleryImg.getDirectoryListing();
	}
});

exports.galleryCall = galleryWindow;
randomBtn.add(randomText);
galleryWindow.add(currentImage, randomBtn);
