Titanium.UI.setBackgroundColor('#000');

//Data
var cruisers = [{title: "Exequror"}, {title: "Celestis"}, {title: "Vexor"}, {title: "Thorax"}];

var frigates = [
	{title: "Atron", description: "A relatively fast, really long description"},
	{title: "Imicus", description: "The 'scanner ship' description"},
	{title: "Incursus", description: "It's got some slot distribution!"},
	{title: "Maulus", description: "You've really got to love nerd culture"},
	{title: "Navitas", description: "Sooper awesome nerdy stuff!"},
	{title: "Tristan", description: "More nerdy stuff!"},
	{title: "Federation Navy Comet", description: "The final word on the culture."}
];

var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#f5f5f5"
});

var titleView = Ti.UI.createView({
	height: 65,
	backgroundColor: "#fff",
	top: 0
});

var border = Ti.UI.createView({
	backgroundColor: "#dbdbdb",
	height: 1,
	top: titleView.height + titleView.top
});

var titleLabel = Ti.UI.createLabel({
	text: "Gallente Tech 1 Ships",
	font: {fontSize: 20, fontFamily: "Arial", fontWeight: "bold"},
	top: 30,
	width: "100%",
	textAlign: "center"
});

var ships = Ti.UI.createTableView({
	top: border.top + border.height
});

if(Ti.Platform.name === "iPhone OS"){
	ships.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
};

var frigatesSection = Ti.UI.createTableViewSection({
	headerTitle: "Tech 1 Frigates",
	footerTitle: "Gallante Frigate Ships"
});

var cruisersSection = Ti.UI.createTableViewSection({
	headerTitle: "Tech 1 Cruisers",
	footerTitle: "Gallente Cruiser Ships"
});
//Add a property to the function for event propagation
var getDetail = function(dataSource){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "#f5f5f5"
	});
		var detailTitleView = Ti.UI.createView({
		height: 65,
		backgroundColor: "#fff",
		top: 0
	});

	var detailBorder = Ti.UI.createView({
		backgroundColor: "#dbdbdb",
		height: 1,
		top: detailTitleView.height + detailTitleView.top
	});
	//Instead of using "this", you use the property of the function
	var detailTitleLabel = Ti.UI.createLabel({
		text: dataSource.title,
		font: {fontSize: 20, fontFamily: "Arial", fontWeight: "bold"},
		top: 30,
		width: "100%",
		textAlign: "center"
	});
	
	var detailText = Ti.UI.createLabel({
		text: dataSource.desc,
		font: {fontSize: 14, fontFamily: "Arial"},
		top: detailBorder.height + detailBorder.top + 40,
		left: 10,
		right: 10
	});
	
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
	
	var closeWindow = function(){
		detailWindow.close({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT});
	};
	
	closeButton.addEventListener("click", closeWindow);
	
	detailTitleView.add(detailTitleLabel);
	detailWindow.add(detailTitleView, detailBorder, detailText, closeButton);
	
	detailWindow.open({transition: Ti.UI.iPhone.AnimationStyle.CURL_DOWN});
	
};

for(var i=0, j=frigates.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: frigates[i].title,
		desc: frigates[i].description,
		hasChild: true
	});
	
	if(Ti.Platform.name === "iPhone OS"){
		theRow.hasChild = false;
		theRow.hasDetail = true;
	};
	frigatesSection.add(theRow);
	//Removing event listener to add event propagation
	//theRow.addEventListener("click", getDetail);
};

for(var i=0, j=cruisers.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: cruisers[i].title
	});
	cruisersSection.add(theRow);
};

//Passing the table view sections through into an array
var shipsSections = [frigatesSection, cruisersSection];

//has to be initialized as an array data type
ships.setData(shipsSections);

//Starting event propagation
ships.addEventListener("click", function(event){
	getDetail(event.source);
	
	//console.log(event.source.title);
});

titleView.add(titleLabel);
mainWindow.add(titleView, border, ships);
mainWindow.open();
