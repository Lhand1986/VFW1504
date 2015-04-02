var mainWindow = Ti.UI.createWindow({
	title: "Project 1",
	backgroundColor: "#7BF"
});

var textView = Ti.UI.createView({
	backgroundColor: "#FFF",
	top: 40,
	left: 20,
	right: 20,
	bottom: 200
});

var textLabel = Ti.UI.createLabel({
	text: "Click either Next or Previous to change the text on screen.",
	font: {fontSize: 16, fontFamily: "AmericanTypewriter"},
	textAlign: "center",
	verticalAlign: "center",
});

var buttonViewLeft = Ti.UI.createView({
	backgroundColor: "#14ad80",
	height: 50,
	left: 20,
	bottom: 140,
	right: "60%"
});

var buttonViewRight = Ti.UI.createView({
	backgroundColor: "#14ad80",
	height: 50,
	right: 20,
	bottom: 140,
	left: "60%"
});


mainWindow.open();
mainWindow.add(textView, buttonViewLeft, buttonViewRight);
textView.add(textLabel);
