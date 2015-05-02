//Create a window to hold the information
var dataWindow = Ti.UI.createWindow({
	backgroundColor: "#909090",
	title: "Data"
});

//Create a table view section to hold JSON data
var dataTable = Ti.UI.createTableViewSection({
	headerTitle: "TARDIS Crew"
});

//Create a table view to hold the table view section, set the style for iPhone to a grouped style
var dataView = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED
});

//Initializing JSON object
var data = {
	"characters": [
	{
		"name": "Twelfth Doctor",
		"description": "The Twelfth Doctor is an incarnation of the Doctor, the protagonist of the BBC science fiction television programme Doctor Who. He is portrayed by Scottish actor Peter Capaldi. Within the series' narrative, the Doctor is a time travelling, humanoid alien from a race known as the Time Lords. When the Doctor is critically injured, he can regenerate his body, and in doing so gain a new physical appearance, and with it a distinct new personality.",
		"image": "/dataImages/peterCap.jpg"
	},
	{
		"name": "Clara Oswald",
		"description": "Clara Oswald is a fictional character created by Steven Moffat and portrayed by Jenna Coleman in the long-running British science fiction television series Doctor Who. First appearing in the show's seventh series, Clara serves as a companion of the eleventh and twelfth incarnations of the alien time traveller known as the Doctor (portrayed by Matt Smith and Peter Capaldi).",
		"image": "/dataImages/clara.png"
	}	
	]
};

//Creating a function to be open a new window and utilize JSON data during event propagation
var getDetail = function(dataSource){
	
	//Creating a container for the image view
	var imageViewContainer = Ti.UI.createView({
	});
	//Creating an image view to hold the image
	var imageView = Ti.UI.createImageView({
		backgroundColor: "#808080",
		image: dataSource.image,
		top: 20,
		left: 20,
		height: 200
	});
	//Creating a window
	var detailWindow = Ti.UI.createWindow({
		//Setting the window title to the .title property in the item that called the function
		title: dataSource.title,
		backgroundColor: "#f5f5f5"
	});
	//Creating a label for text
	var detailText = Ti.UI.createLabel({
		//Setting the text in the label to the .desc property in the item that called the function
		text: dataSource.desc,
		//Setting a font size and family for the text
		font: {fontSize: 14, fontFamily: "Arial"},
		//Adding spacing at the top
		top: imageView.height + imageView.top + 15,
		//Adding spacing at the left
		left: 15,
		//Adding spacing at the right
		right: 15
	});
	//Adding the container to the view
	imageViewContainer.add(imageView);
	
	//Add the detailText label to the detailWindow
	detailWindow.add(detailText, imageViewContainer);
	//Open the detailWindow in the navWindow when the function is called
	navWin.openWindow(detailWindow);
};

//Utilizing a for loop to import the JSON data to individual rows
for(var i=0, j=data.characters.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: data.characters[i].name,
		desc: data.characters[i].description,
		image: data.characters[i].image,
		hasChild: true
	});
	
	//Add the rows to the data table
	dataTable.add(theRow);
}

//Create event propagation to listen for a click on each of the rows
dataView.addEventListener("click", function(event){
	getDetail(event.source);
});

//Convert the data section to an array for assignment
var dataSection = [dataTable];

//Set the data property of the view to the array
dataView.setData(dataSection);
//Add the view to the window
dataWindow.add(dataView);
//Making the window globally available
exports.dataCall = dataWindow;
