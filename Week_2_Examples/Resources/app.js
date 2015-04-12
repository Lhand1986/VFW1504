Titanium.UI.setBackgroundColor('#000');

//Data
var frigates = [{title: "Atron"}, {title: "Imicus"}, {title: "Incursus"}, {title: "Maulus"}, {title: "Navi"}];
var cruisers = [{title: "Exequror"}, {title: "Celestis"}, {title: "Vexor"}, {title: "Thorax"}];

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
//Passing the table view sections through into an array
var shipsSections = [frigatesSection, cruisersSection];

//has to be initialized as an array data type
ships.setData(shipsSections);

titleView.add(titleLabel);
mainWindow.add(titleView, border, ships);
mainWindow.open();