var data = {
	"output":{
		"header": "Favorite Show",
		"show": "Doctor Who",
		"characters": [
			{"alias": "The Doctor", "role": "Protagonist"},
			{"alias": "Amy", "role": "Companion"},
			{"alias": "Rory", "role": "Companion 2"},
			{"alias": "Dalek", "role": "Antagonist"}
		]
	}
};

for(var prop in data){
	//console.log(data[prop]);
	for(var x in data[prop]){
		//console.log(data[prop][x]);
		if(x === "characters"){
			for(var i=0; i<data[prop].characters.length; i++){
				for(var z in data[prop].characters[i]){
					console.log(data[prop].characters[i][z]);
				}
			}
		}
	}
}

//You've got to keep in mind, are you looping through an array? Or are you looping through an object?