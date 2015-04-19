//TABLE VIEWS
/*
Titanium.UI.setBackgroundColor('#000');

//Data
//var frigates = [{title: "Atron"}, {title: "Imicus"}, {title: "Incursus"}, {title: "Maulus"}, {title: "Navi"}];
var cruisers = [{title: "Exequror"}, {title: "Celestis"}, {title: "Vexor"}, {title: "Thorax"}];

var frigates = [
	{title: "Atron", description: "A relatively fast, really long description"},
	{title: "Imicus", description: "The 'scanner ship' description"},
	{title: "Incursus", description: "It's got some slot distribution!"},
	{title: "Maulus", description: "You've really got to love nerd culture"}
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

var getDetail = function(){
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
	
	var detailTitleLabel = Ti.UI.createLabel({
		text: this.title,
		font: {fontSize: 20, fontFamily: "Arial", fontWeight: "bold"},
		top: 30,
		width: "100%",
		textAlign: "center"
	});
	
	var detailText = Ti.UI.createLabel({
		text: this.desc,
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
	theRow.addEventListener("click", getDetail);
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

titleView.add(titleLabel);
mainWindow.add(titleView, border, ships);
mainWindow.open();


//To fix some of the issues with iOS 8, you can change the header/footer from headerTitle to headerView and vice versa.
//header/footerView need to have their own properties enabled in the form of it's own view with properties to apply
//as it is a view instead of simply a title. The view allows us to add formatting to the header/footer, as well as
//applying spacing in between them.

//Example
/*
var customFooter = Ti.UI.createView({
	height: 50
	backgroundColor: "#efeff4"
});

var cfText = Ti.UI.createLabel({
	text: "Just to name a few ...",
	font: (fontSize: 12),
	color: "#aaa",
	left: 18,
	top: 4
});
//Ensure that you add the text to the view
customFooter.add(cfText);

//Examples of different ways to create the header/footer
var section = Ti.UI.createTableViewSection({
	//headerTitle: n,
	//headerView: customHeader,
	//footerTitle: "Just to name a few ...",
	footerView: customFooter
});
*/

//JSON Object
var ships = {
	"frigs":{
		"theTitle": "Frigates",
		"shipList": [
			{
				"name": "Federation Navy Comet",
				"description": "The Comet's design comes from blerch."
			},
			{	"name": "Helios",
				"description": "Designed for commando and blerch operation."
			},
			{
				"name": "Atron",
				"description": "The Atron is a hard nugget and stuff"
			}
			]
	},
	"cruisers":{
		"theTitle": "Cruisers",
		"shipList": [
		{
			"name": "Vexor",
			"description": "The Vexor includes a lot of stuff"
		},
		{
			"name": "Thorax",
			"description": "The Thorax-class cruiser is a big one"
		}
		]
	}
};

var mainWindow = Ti.UI.createWindow({
	title: "Ships",
	backgroundColor: "#dadada"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

var getDetail = function(){
	var detailWindow = Ti.UI.createWindow({
		title: this.text,
		backgroundColor: "#fff"
	});
	var detailText = Ti.UI.createLabel({
		text: this.details,
		top: 30,
		left: 15,
		right: 15
	});
	detailWindow.add(detailText);
	navWindow.openWindow(detailWindow);
};

var makeUI = function(){
	var spacing = 80;
	for(n in ships){
		var titleLabel = Ti.UI.createLabel({
			text: ships[n].theTitle,
			left: 15,
			right: 15,
			top: spacing,
			height: 25,
			backgroundColor: "#333",
			font: {fontSize: 22, fontFamily: "Verdana"},
			color: "#fafafa"
		});
		spacing = titleLabel.top + titleLabel.height + 10;
		console.log(spacing);
		for(m in ships[n].shipList){
			var itemLabel = Ti.UI.createLabel({
				text: ships[n].shipList[m].name,
				details: ships[n].shipList[m].description,
				left: 30,
				right: 15,
				top: spacing,
				height: 25,
				backgroundColor: "#ffffff",
				font: {fontSize: 22, fontFamily: "Verdana"},
				color: "#333"
			});
			mainWindow.add(itemLabel);
			spacing = itemLabel.top + itemLabel.height + 10;
			itemLabel.addEventListener("click", getDetail);
		}
		mainWindow.add(titleLabel);
		spacing = itemLabel.top + itemLabel.height + 40;
	}
};

makeUI();

navWindow.open();