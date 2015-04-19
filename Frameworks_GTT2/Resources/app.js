//contains info but not organized (what kind of info is "sarah" for example?)
/*var userArray = ["Sarah", 25, "sarah@test.com"];

for(var i=0; i<userArray.length; i++){
	console.log("Array contains:" + userArray[i]);
}

//Organized information using properties
//Standard object written in JavaScript
var userObject = {
	name: "Sarah",
	age: 25,
	email: "sarah@test.com"
};

for(var i in userObject){
	console.log(i);
	//console.log("Object contains: " + userObject[i]);
};

//JSON object, all properties are in string form. Properties can be assigned to string object
//with encapsulation.
var data = {
	"userObject": {
		"name": "Sarah",
		"age": "25",
		"email": "sarah@test.com"
	}
};
*/

var data = {
	"nouns":{
		"title": "Nouns",
		"footer": "The nouns",
		"words": [
			{"eng": "Table", "esp": "Mesa"},
			{"eng": "Cup", "esp": "Taza"},
			{"eng": "Knife", "esp": "Cuchillo"}
		]
	},
	"verbs":{
		"title": "Verbs",
		"footer": "The verbs",
		"words": [
			{"eng": "Run", "esp": "Correr"},
			{"eng": "Walk", "esp": "Caminar"}
		]
	}
};

for(var prop in data){
	//console.log(data[prop]);
	for(var x in data[prop]){
		//console.log(data[prop][x]);
		if(x === "words"){
			for(var i=0; i<data[prop].words.length; i++){
				//console.log(data[prop].words[i]);
				for(var z in data[prop].words[i]){
					console.log(data[prop].words[i][z]);
				}
			}
		}
		
	}
};



//You've got to keep in mind, are you looping through an array? Or are you looping through an object?



