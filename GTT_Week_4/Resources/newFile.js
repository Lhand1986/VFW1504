var msg = "hello";
var showMessage = function(){
	console.log("My message");
};

//Sends variable outside of the scope of the current file
exports.myMessage = msg;
exports.runMessage = showMessage;
