//Create a window to hold data
var customWindow = Ti.UI.createWindow({
	backgroundColor: "#003b6f",
	title: "Custom Page"
});

//Create a label for the header
var customHeader = Ti.UI.createLabel({
	text: "To send The Doctor a message, fill out the form below.",
	top: 10,
	left: 15,
	font: {fontSize: 12, fontFamily: "Times New Roman", fontWeight: "bold"},
	color: "#white"
});

//Create a label for the text field
var nameLabel = Ti.UI.createLabel({
	text: "Please enter your name:",
	top: customHeader.top + 40,
	left: 15,
	font: {fontSize: 18, fontFamily: "Arial"},
	color: "#white"
});

//Creating the text field
var nameText = Ti.UI.createTextField({
	//Setting a specific style for the border
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	top: nameLabel.top + nameLabel.font.fontSize + 10,
	left: nameLabel.left,
	//Setting the width of the text field
	width: 250
});

//Creating a label for the text area
var problemLabel = Ti.UI.createLabel({
	text: "Please enter your primary complaint:",
	top: nameText.top + 40,
	left: 15,
	font: {fontSize: 18, fontFamily: "Arial"},
	color: "#white"
});

//Creating the text area
var problemText = Ti.UI.createTextArea({
	borderRadius: 5,
	top: problemLabel.top + problemLabel.font.fontSize + 10,
	left: 15,
	width: 250, height: 150,
	textAlign: "left"
});

//Creating a view to hold a button
var sendBtn = Ti.UI.createView({
	backgroundColor: "#333333",
	height: 65,
	bottom: 0
});

//Creating text for the button
var sendText = Ti.UI.createLabel({
	text: "Send Message",
	font: {fontSize: 20, fontFamily: "Arial", fontWeight: "bold"},
	textAlign: "center",
	color: "#e6e6e6"
});

//Creating a function to open a new window with information
function sendMessage(){
	//Create the new window, add a title
	var messageWindow = Ti.UI.createWindow({
		backgroundColor: "#003b6f",
		title: "Message Sent"
	});
	//Creating a label to display text on the screen
	var messageLabel = Ti.UI.createLabel({
		top: 20,
		left: 15,
		font: {fontSize: 16, fontFamily: "Times New Roman"},
		color: "white",
		//Utilizing adding strings and values together in order to utilize the user input received
		text: "Greetings, " + nameText.value + ", your message has been sent and received. The Doctor will get back to you after he has finished dealing with the Daleks, The Master, Cybermen, Weeping Angels, the Judoon, the Sontaran Empire, saved the last of the Ice Warriors, found Gallifrey, taken the sash, crown, key, rod, coronet, harp, ring, scrolls, and gauntlet from Rassilon, and gone out for ice cream with Clara. As he is a time traveler, he will get back to you shortly. However, if you encounter The Silence, you may not remember the response. Your message is below.\n\n\n\n" + problemText.value
	});
	//Add the message label to the window
	messageWindow.add(messageLabel);
	//Open the window as a navigation window
	navWin.openWindow(messageWindow);
}
//Add event listener to the send button
sendBtn.addEventListener("click", function(){
	sendMessage();
});	

//Add the button to the screen
sendBtn.add(sendText);
//Add all of the labels and text to the window
customWindow.add(customHeader, nameLabel, nameText, problemLabel, problemText, sendBtn);
//Export the window to be called globally
exports.customCall = customWindow;
