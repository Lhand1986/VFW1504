//Creating custom view for header
var terranHeader = Ti.UI.createView({
	height: 50,
	backgroundColor: "#efeff4"
});

//Creating custom view for header
var protossHeader = Ti.UI.createView({
	height: 50,
	backgroundColor: "#efeff4"
});

//Creating custom view for header
var zergHeader = Ti.UI.createView({
	height: 50,
	backgroundColor: "#efeff4"
});

//Creating a label for the terranHeader custom view
var terranCH = Ti.UI.createLabel({
	text: "Terrans",
	font: {fontSize: 15},
	color: "#000",
	left: 18,
	top: 4
});
//Creating a label for footer custom views
var customFL = Ti.UI.createLabel({
	text: "Leadership",
	font: {fontSize: 12},
	color: "#aaa",
	left: 18,
	top: 4
});

//Creating a label for the protossHeader custom view
var protossCH = Ti.UI.createLabel({
	text: "Protoss",
	font: {fontSize: 15},
	color: "#000",
	left: 18,
	top: 4
});

//Creating a label for the zergHeader custom view
var zergCH = Ti.UI.createLabel({
	text: "Zerg",
	font: {fontSize: 15},
	color: "#000",
	left: 18,
	top: 4
});

//Adding the terranText property to the terranHeader custom view
terranHeader.add(terranCH);
//Adding the protossText property to the protossHeader custom view
protossHeader.add(protossCH);
//Adding the zergText property to the zergHeader custom view
zergHeader.add(zergCH);

//Creating table view section for the terrans
var terranSection = Ti.UI.createTableViewSection({
	//Adding custom view header to table view
	headerView: terranHeader,
	footerTitle: "Leadership"
});

//Creating table view section for the terrans
var protossSection = Ti.UI.createTableViewSection({
	//Adding custom view header to table view
	headerView: protossHeader,
	footerTitle: "Leadership"
});

//Creating table view section for the terrans
var zergSection = Ti.UI.createTableViewSection({
	//Adding custom view header to table view
	headerView: zergHeader,
	footerTitle: "Leadership"
});

//Creating a table view to hold information
var leadersView = Ti.UI.createTableView({
	//Setting the style of this table view as a GROUPED style for the iPhone
	style: Ti.UI.iPhone.TableViewStyle.GROUPED
});



//JSON object
var leaders = {
	"leaderSections": {
		"terranList": [
					{
						"name": "Jim Raynor",
						"description": "Jim Raynor is the primary Terran protagonist in the StarCraft series and the main character of the series. The character is voiced by Robert Clotworthy. A former colonial marshal on the backwater planet of Mar Sara, Raynor joins Arcturus Mengsk's revolutionaries in their fight against the tyrannical and corrupt Confederacy of Man, where he develops a relationship with Sarah Kerrigan, Mengsk's second in command. However, he quickly comes to realise that Mengsk is far from the force for good when he abandons Kerrigan and the entire population of a planet to die by the hand of the Zerg to satisfy his own thirst for power. Disillusioned and embittered, Raynor forms his own rebel movement to oppose Mengsk's new imperial Terran Dominion."
					},
					
					{
						"name": "Arcturus Mengsk",
						"description": "Arcturus Mengsk was the emperor of the Terran Dominion, which presided over the majority of the Terrans in the Koprulu Sector. A core character of the series, he is voiced by James Harper and is the primary subject of the novel I, Mengsk. Mengsk is extremely intelligent and is capable as both a strategist and tactician. While Mengsk does not empathize with people well, he is highly skilled at oratory and propaganda and possesses a remarkable ability for manipulating other people."
					},
					
					{
						"name": "Alexi Stukov",
						"description": "Alexei Stukov is the vice admiral and second-in-command of the United Earth Directorate's expeditionary force. Voiced by Cástulo Guerra, he appears in Brood War and three bonus levels. A man of Russian descent, his military career primarily revolves around secret research, though he is also noted as an excellent tactician. A close friend of DuGalle, Stukov will debate situations with the admiral but will subordinate himself to his friend's higher rank. Stukov becomes suspicious of the motives of Samir Duran after the latter convinces DuGalle to destroy the psi disruptor. Believing the device to be the UED's best hope to conquer the Zerg, Stukov instead takes the psi disruptor to Braxis but is tracked down and shot dead by Duran. With his dying breaths, Stukov convinces DuGalle that Duran is a traitor and to keep the psi disruptor running for the UED's assault on the Zerg homeworld of Char. Stukov's body is given a full funeral and UED propaganda portrays Stukov as a hero, claiming he died in combat on Char."
					}
					],
	
		"protossList": [
					{
						"name": "Fenix",
						"description": "Fenix is a praetor within the military of the Khalai. Bill Roper voices Fenix in both StarCraft and Brood War. A templar and an old friend of Tassadar's, Fenix is a powerful and cunning leader, but remains distrustful towards the motives of the ruling judicator caste. Under the command of Aldaris, Fenix helps defend Aiur from the Zerg invasion, but eventually falls in battle when his position is overwhelmed by Zerg. Due to a malfunctioning of his psi-blades, Fenix falls to a small army of hydralisk at the battle against the Zerg in Antioch. Nevertheless, Fenix is retrieved and integrated into a dragoon, a mechanical fire support unit designed to allow incapacitated warriors to continue military service. Fenix allies his templar forces with Tassadar's upon the schism between Tassadar and the Protoss government, later leading a task force against the Overmind's outer defenses, facilitating Zeratul's assassination of a number of cerebrates and ultimately the death of the Overmind itself. Over this time, Fenix develops a strong friendship with Tassadar's Terran companion Jim Raynor."
					},
					
					{
						"name": "Zeratul",
						"description": "Zeratul is a dark templar prelate and one of the main Protoss protagonists. The character is voiced by Jack Ritschel in StarCraft and Brood War, and by Fred Tatasciore in all three parts of StarCraft II. A renowned psionic warrior and assassin, Zeratul is somewhat secretive and calculating, but is nevertheless honorable and loyal to his species. He teaches Tassadar how to use dark templar energies and facilitates the final attack on the Overmind by slaying several cerebrates. Following the death of the Overmind, Zeratul tries to put in motion the reunification of the Khalai survivors with the wayward dark templar and unmask the secrets of Samir Duran's experiments. After Duran revealed he had been breeding Protoss-Zerg hybrids for a greater master, Zeratul set out to find Duran's master and his plan, which encompasses all of his activities in the three installments of StarCraft II. In Wings of Liberty, he gives Jim Raynor a crystal with his memories to emphasize the importance of the latter's mission to de-infest Kerrigan. In Heart of the Swarm, he guides Kerrigan to Zerus, the original home of the Zerg, and encourages her to re-infest herself so she can stop Amon, a fallen Xel'naga who is revealed to be the master of Duran and seeks to destroy all life in the Korpulu Sector and remold it in his image. Zeratul will also feature in the events of Legacy of the Void (originally believed to be the central character, the actual protagonist of the story is Artanis)."
					},
					
					{
						"name": "Artanis",
						"description": "Artanis is a high templar and a military commander introduced in Brood War, where he is voiced by Paul Ainsley; the character is voiced by Patrick Seitz in StarCraft II. The character also appears in the novels Queen of Blades and Twilight. Later retcons have made Artanis the identity of the player character for the Protoss campaign in StarCraft. An ambitious leader, Artanis is the youngest templar to achieve the rank of praetor and executor. Artanis holds Tassadar in high esteem and despite being a strong believer in Khalai system, he also holds to the idea of reunification with the dark templar. Artanis is responsible for the initial defense of Aiur alongside Fenix before being dispatched to arrest Tassadar by Aldaris; Artanis, however, sides with Tassadar and helps him defeat the Overmind. Artanis later organizes the evacuation of his now devastated home world to the dark templar planet of Shakuras, and with Zeratul undertakes measures to cleanse the Zerg presence on Shakuras through the use of a Xel'Naga temple. When Sarah Kerrigan's actions result in the deaths of Aldaris, Fenix and Raszagal, Artanis commands a fleet to bring Kerrigan to justice on Char, despite allying with both the Dominion and the remainder of the UED, his forces are defeated by her Zerg. Artanis returns to Shakuras to rebuild the Protoss civilization; with Zeratul having disappeared, Artanis becomes the hierarch of the unified Protoss Protectorate, but struggles with reintegrating the two estranged branches of his people, with many of the Aiur survivors desiring to retake their home world. He makes a brief appearance in Wings of Liberty in the vision of the Protoss's last stand against the hybrids and their Zerg swarm."
					}
					],
	
		"zergList": [
					{
						"name": "Sarah Kerrigan",
						"description": "Sarah Kerrigan is the leader of the Zerg Swarm, styling herself as the Queen of Blades. Voiced by Glynnis Talken Campbell in StarCraft and Brood War and by Tricia Helfer in Wings of Liberty and Heart of the Swarm, Kerrigan serves as the primary antagonist of all but the last game. Originally a Terran ghost agent for Arcturus Mengsk, she is betrayed and abandoned to the Zerg, who transform her into a Terran/Zerg hybrid with vast psionic powers. Following the death of the Overmind, Kerrigan asserts her independence, striking out at those who betrayed her and who seek to contain her, eventually taking control of the entire Zerg Swarm. Four years later, Kerrigan invades the Dominion in search of a number of Xel'Naga artifacts; these artifacts are instead retrieved by Raynor at the behest of the Moebious Foundation, who assembles them into a device that reverts Kerrigan to a human. After her deinfestation, Kerrigan is mercilessly pursued by Arcturus Mengsk, however she successfully escapes Arcturus's Dominion forces. After willingly allowing herself to be reinfested on Zerus, Kerrigan is reborn as the Primal Queen of Blades, after which she successfully reunites the Zerg Swarm and storms the Dominion capital of Augustgrad on the planet Korhal with help from Raynor's Raiders. After a showdown with Acturus Mengsk inside his Palace, Kerrigan manages to gain the upper hand with help from James Raynor, and kills Acturus by overloading his body with psychic energy, causing him to explode spectacularly. In the aftermath of her victory, Kerrigan gathers the Swarm and departs in search of Amon."
					},
					
					{
						"name": "The Overmind",
						"description": "The Overmind is the center of the Zerg Swarm's hive mind society, created by the Xel'Naga as a single consciousness for their experiments on the Zerg. It is the antagonist of StarCraft, where it is voiced by Jack Ritschel; Paul Eiding voices the character in Wings of Liberty. At some point during its creation, it was secretly enslaved by the Dark Voice (a fallen xel'naga referred to as Amon), who implanted it with a directive to destroy the protoss and bound the Zerg to a hive mind. The Overmind becomes aware of Xel'Naga, attacking and assimilating its masters. Through this, the Overmind learns of the existence of the Protoss and is determined to assimilate the fellow Xel'Naga-empowered species, believing this will result in perfection. To provide the necessary force to overcome the Protoss, the Overmind targets the psionic potential of the Terrans for assimilation. He also assimilated Sarah Kerrigan so as to create a weapon to free the Zerg from the control of his Dark Master. The Zerg and Protoss clash on various Terran worlds, eventually leading to Zeratul assassinating the cerebrate Zasz. Zasz's death momentarily links the minds of the Overmind and Zeratul, allowing Overmind to learn the location of the Protoss homeworld Aiur. The Overmind quickly launches an invasion of Aiur and manifests itself on the planet's surface. Following a lengthy and costly campaign on Aiur, Tassadar harnesses the energies of the dark templar to strike at the Overmind directly, disintegrating it."
					},
					
					{
						"name": "Cerebrates",
						"description": "Cerebrates are secondary agents in the Zerg Swarm, each of which commands an individual brood of Zerg that possesses a distinct tactical role within the hierarchy. Alongside the Overmind, the cerebrates are the only Zerg with full sapience, each with its own personality and methods, although they are genetically incapable of disobeying the Overmind. Cerebrates can be reincarnated by the Overmind upon death, though dark templar energies are capable of preventing this. The death of a cerebrate causes the Overmind to lose control of its respective brood, which will then run amok. The highest ranking cerebrate is Daggoth, commander of the Tiamat Brood, the largest and most powerful brood in the Zerg Swarm. Voiced by Micky Neilson, Daggoth is the most strong-willed and ferocious of the cerebrates. It trains the player character in the Zerg campaign of StarCraft and dispenses forces to protect Kerrigan following her transformation. Daggoth is also charged with protecting the Overmind itself. In the wake of the Overmind's death, Daggoth takes command of one faction of Zerg, ordering several cerebrates to merge to form a new Overmind."
					}
					]
			}
};

//Creating a function to be called in a loop
var getDetail = function(){
	//Creating a window
	var detailWindow = Ti.UI.createWindow({
		//Setting the window title to the .title property in the item that called the function
		title: this.title,
		//Setting a background color so the window isn't black
		backgroundColor: "#f5f5f5"
	});
	//Creating a label for text
	var detailText = Ti.UI.createLabel({
		//Setting the text in the label to the .desc property in the item that called the function
		text: this.desc,
		//Setting a font size and family for the text
		font: {fontSize: 14, fontFamily: "Arial"},
		//Adding spacing at the top
		top: 30,
		//Adding spacing at the left
		left: 15,
		//Adding spacing at the right
		right: 15
	});
	//Add the detailText label to the detailWindow
	detailWindow.add(detailText);
	//Open the detailWindow in the navWindow when the function is called
	navWindow.openWindow(detailWindow);
};

//Creating a for loop to step through the leaders JSON object
for(var prop in leaders){
	//Stepping further into the object
	for(var x in leaders[prop]){
		//Adding an "if" statement to ensure the proper information is retrieved
		if(x === "terranList"){
			//Creating a for loop to retrieve all the data required
			for(var i=0, j=leaders[prop].terranList.length; i<j; i++){
				//Create variable theRow as a TableViewRow
				var theRow = Ti.UI.createTableViewRow({
					//Assign the name property of terranList to the title based on where in the loop we are
					title: leaders[prop].terranList[i].name,
					//Assign the description property of terranList based on where in the loop we are
					desc: leaders[prop].terranList[i].description,
					//Adding an indicator to the user that there is more to be seen in the row
					hasChild: true
				});
				//Add theRow to the terranSection View every time the loop iterates
					terranSection.add(theRow);
					//console.log(theRow.title, theRow.desc);
					//Add an event listener, calling the getDetail function
					theRow.addEventListener("click", getDetail);

			}

		}
		//Going back through the same process for the protossList
		if(x === "protossList"){
			for(var i=0; i<leaders[prop].protossList.length; i++){
				var theRow = Ti.UI.createTableViewRow({
					title: leaders[prop].protossList[i].name,
					desc: leaders[prop].protossList[i].description,
					hasChild: true
				});
					protossSection.add(theRow);
					theRow.addEventListener("click", getDetail);
				
			}

		}
		//Going through the same process a final time for the zergList
		if(x === "zergList"){
			for(var i=0; i<leaders[prop].zergList.length; i++){
				var theRow = Ti.UI.createTableViewRow({
					title: leaders[prop].zergList[i].name,
					desc: leaders[prop].zergList[i].description,
					hasChild: true
				});
					zergSection.add(theRow);
					theRow.addEventListener("click", getDetail);
				
			}
		}
	}
};

//Creating an array to pass the sections through to the leaders table view
var leadersSections = [terranSection, protossSection, zergSection];
//Assigning the leaderSections array to the leaders table view
leadersView.setData(leadersSections);
//Adding leadersView to the main window
mainWindow.add(leadersView);
