//Utilizing the Filesystem titanium function to point titanium at the resources directory, images folder
var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
//Assigning the filenames in the images folder to an array
var imageFiles = imagesFolder.getDirectoryListing();

//Setting a value equal to the width of the screen
var pWidth = Ti.Platform.displayCaps.platformWidth;
//Setting a value equal to the height of the screen
var pHeight = Ti.Platform.displayCaps.platformHeight;
//Amount of images on the screen
var rowCount = 4;
//Setting a margin value
var margin = 14;
//Math to set the size of the thumbnails
var trueCanvasWidth = pHeight - pWidth;
//More math to set the size of the thumbnails
var size = trueCanvasWidth / rowCount;

//Creating a label to assign to a button
var galleryButton = Ti.UI.createLabel({
	title: "Firefly",
	text: "Open Gallery",
	backgroundColor: "#333",
	color: "#fff",
	height: 50,
	borderRadius: 10,
	font: {fontSize: 12, fontFamily: "Arial"},
	textAlign: "center",
	width: "90%",
	bottom: "50%"
});
//Creating a border view value
var border = Ti.UI.createView({
	backgroundColor: "#cecece",
	height: 1,
	width: pWidth,
	top: 20
});
//Making a scroll view so that the images can be scrolled through
var viewContainer = Ti.UI.createScrollView({
	top: 0, //0 because of the horizontal layout
	width: pWidth,
	contentWidth: pWidth,
	height: pHeight - border.height - border.top,
	showVerticleScrollIndicator: true,
	backgroundColor: "#808080",
	//Setting the layout to a horizontal value so the images automatically stack in a horizontal order
	layout: "horizontal"
});

//For loop to add images to the screen
for(var i=0; i<imageFiles.length; i++){
	//Creating individual views for each of the images
	var view = Ti.UI.createView({
		backgroundColor: "#808080",
		top: margin,
		left: margin,
		width: size,
		height: size,
		borderRadius: 10
	});
	//Creating the thumbnail views to add to the parent view
	var thumb = Ti.UI.createImageView({
		//Calling the imageFiles array and pointing titanium to the proper directory to retrieve the files
		image: "images/" + imageFiles[i],
		//Assigning an ID value to each of the thumbnails
		id: imageFiles[i],
		top: 0,
		//Math to ensure the thumbnail fills the view
		width: view.width*2
	});
	//Adding the thumbnail with a border to the view
	view.add(thumb, border);
	//Adding the view to the view container
	viewContainer.add(view);
};

//Creating a function to open the thumbnails into a wider window
var thumbOpen = function(dataSource){
	
	//Initializing a value pulling the id off the thumbnail view
	var imageTransfer = dataSource.id;
	
	//Creating a new window to hold the image
	var pictureWindow = Ti.UI.createWindow({
		backgroundColor: "#808080"
	});
	
	//Creating a new view to add the image to
	var pictureViewContainer = Ti.UI.createView({
		backgroundColor: "#808080",
		height: pHeight - border.height - border.top,
		top: 20
	});
	//Pulling the image and adding it to an image view
	var pictureView = Ti.UI.createImageView({
		//Using the pulled image ID to call the image from the proper folder
		image: "images/" + imageTransfer,
		top: 0
	});
	
		//Creating a label for each of the images as they are pulled
	var imageLabel = Ti.UI.createLabel({
		text: imageTransfer,
		font: {fontSize: 15, fontFamily: "Arial"},
		color: "white",
		top: "50%"
	});
		//Creating a close window button for the full sized image
		var closePicButton = Ti.UI.createLabel({
		text: "Close Window",
		backgroundColor: "#333",
		color: "#fff",
		height: 50,
		font: {fontSize: 12, fontFamily: "Arial"},
		width: "100%",
		bottom: 0,
		textAlign: "center"
	});
	//Creating a function that, when called, will close the pictureWindow
	var closeWindow = function(){
		pictureWindow.close({transition: Ti.UI.iPhone.AnimationStyle.CURL_DOWN});
	};
	//Creating an event listener for the close button
	closePicButton.addEventListener("click", closeWindow);
	//Adding the pictureView and imageLabel to the picture view container
	pictureViewContainer.add(pictureView, imageLabel);
	//Adding the pictureViewContainer and the close button to the pictureWindow
	pictureWindow.add(pictureViewContainer, closePicButton);
	//Open the pictureWindow when this function is called
	pictureWindow.open({transition: Ti.UI.iPhone.AnimationStyle.CURL_UP});

};

//Creating a function to start the gallery
var getDetail = function(dataSource){
	
	//Create a window to hold the gallery
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "#808080"
	});
	//Creating a view to hold the title label
	var detailTitleView = Ti.UI.createView({
		height: 65,
		backgroundColor: "#fff",
		top: 0
	});
	//Creating a border
	var detailBorder = Ti.UI.createView({
		backgroundColor: "#dbdbdb",
		height: 1,
		top: detailTitleView.height + detailTitleView.top
	});
	//Creating a title label
	var detailTitleLabel = Ti.UI.createLabel({
		text: dataSource.title,
		font: {fontSize: 20, fontFamily: "Arial", fontWeight: "bold"},
		top: 30,
		width: "100%",
		textAlign: "center"
	});
	//Creating a close window button label
	var closeButton = Ti.UI.createLabel({
		text: "Close Window",
		backgroundColor: "#333",
		color: "#fff",
		height: 50,
		font: {fontSize: 12, fontFamily: "Arial"},
		width: "100%",
		bottom: 0,
		textAlign: "center"
	});
	//Creating a function that, when called, closes the detailWindow
	var closeWindow = function(){
		detailWindow.close({transition: Ti.UI.iPhone.AnimationStyle.CURL_DOWN});
	};
	//Adding an event listener to the close window button
	closeButton.addEventListener("click", closeWindow);
	//Adding the detailTitleLabel to the detailTitleView
	detailTitleView.add(detailTitleLabel);
	//Adding the detailTitleView, border, container, and close button to the detailWindow
	detailWindow.add(detailTitleView, detailBorder, viewContainer, closeButton);
	//Open the detailWindow
	detailWindow.open({transition: Ti.UI.iPhone.AnimationStyle.CURL_UP});
};

//Adding event propagation for the gallery button to start the gallery
galleryButton.addEventListener("click", function(event){
	getDetail(event.source);
});
//Adding event propagation for the individual thumbnails to open each picture
viewContainer.addEventListener("click", function(event){
	//Logic introduced so that if the user clicks outside the thumbnail, it will not call a function
	if(event.source.id != null){
		thumbOpen(event.source);
	};
	
});

//Add the gallery button to the main window so we can get this show started
mainWin.add(galleryButton);