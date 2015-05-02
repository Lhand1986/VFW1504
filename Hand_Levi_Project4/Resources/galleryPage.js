//Create a window for the gallery
var galleryWindow = Ti.UI.createWindow({
	backgroundColor: "#909090",
	title: "Gallery"
});

//Utilizing the Filesystem titanium function to point titanium at the resources directory, galleryImg folder
var galleryImg = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "galleryImages");
//Assigning the filenames in the images folder to an array
var imageFiles = galleryImg.getDirectoryListing();

//Create a view for the random button
var randomBtn = Ti.UI.createView({
	backgroundColor: "#333333",
	height: 65,
	bottom: 0
});

//Create text for the random button
var randomText = Ti.UI.createLabel({
	text: "Random Image",
	font: {fontSize: 20, fontFamily: "Arial", fontWeight: "bold"},
	textAlign: "center",
	color: "#e6e6e6"
});

//Create a view to hold the first image displayed
var currentImage = Ti.UI.createImageView({
	//This line accounts for the last image in the array
	image: "galleryImages/" + imageFiles[imageFiles.length - 1],
	top: "25%"
});

//Create a function to display an image
function displayImage(){
	//Function always displays the image in the "0" value of the array
	currentImage.image = "galleryImages/" + imageFiles[0];
}

//Utilizing a common shuffle function to shuffle the array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

//Add an event listener to the random button
randomBtn.addEventListener("click", function(event){
	//Run the shuffle function
	shuffle(imageFiles);
	//Run the displayImage function
	displayImage();
	//Remove the first image in the array every time the button is clicked
	imageFiles.splice(0, 1);
	//Add logic to check if the array is empty, and if it is, reassign the images to the array
	if(imageFiles.length === 0){
		imageFiles = galleryImg.getDirectoryListing();
	}
});

//Export the window so that it can be called globally
exports.galleryCall = galleryWindow;
//Add the text to the button
randomBtn.add(randomText);
//Add the first image and the button to the window
galleryWindow.add(currentImage, randomBtn);
