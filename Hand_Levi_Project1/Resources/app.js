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

mainWindow.open();
mainWindow.add(textView);
textView.add(textLabel);
