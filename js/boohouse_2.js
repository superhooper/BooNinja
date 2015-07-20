/* WORK ON GETTING THIS LOOP right
var roomsArray = [ {name: 'livingroom', image: 'livingroom.jpg', map: 'livingroommap'}, 
				{name: 'kitchen', image: 'kitchen.jpg', map: 'kitchenmap'},
				{name: 'study', image: 'study.jpg', map: 'studymap'},
				{name: 'bedroom1', image: 'bedroom1.jpg', map: 'bedroom1map'},
				{name: 'bedroom2', image: 'bedroom2.jpg', map: 'bedroom2map'},
				{name: 'bathroom', image: 'bathroom.jpg', map: 'bathroommap'},
				{name: 'porch', image: 'porch.jpg', map: 'porchmap'},
				{name: 'garage', image: 'garage.jpg', map: 'garagemap'}
				]

function changeRooms(room) {
	e.preventDefault;
	var i = document.getElementById('currentroom');
	for(i=0; i < rooms.length; i++) {
		i.setAttribute('src', 'image[i]');
		i.setAttribute('usemap', 'map[i]');
	}
}
*/

//Change all the room attributes
function livingroom(e) {
	e.preventDefault;
	var room = document.getElementById('currentroom');
	room.setAttribute('src', 'livingroom.jpg');
	room.setAttribute('usemap', '#livingroommap');
}
function kitchen(e) {
	e.preventDefault;
	var room = document.getElementById('currentroom');
	room.setAttribute('src', 'kitchen.jpg');
	room.setAttribute('usemap', '#kitchenmap');
}
function study(e) {
	e.preventDefault;
	var room = document.getElementById('currentroom');
	room.setAttribute('src', 'study.jpg');
	room.setAttribute('usemap', '#studymap');
}
function bedroom1(e) {
	e.preventDefault;
	var room = document.getElementById('currentroom');
	room.setAttribute('src', 'bedroom1.jpg');
	room.setAttribute('usemap', '#bedroom1map');
}
function bedroom2(e) {
	e.preventDefault;
	var room = document.getElementById('currentroom');
	room.setAttribute('src', 'bedroom2.jpg');
	room.setAttribute('usemap', '#bedroom2map');
}
function bathroom(e) {
	e.preventDefault;
	var room = document.getElementById('currentroom');
	room.setAttribute('src', 'bathroom.jpg');
	room.setAttribute('usemap', '#bathroommap');
}
function porch(e) {
	e.preventDefault;
	var room = document.getElementById('currentroom');
	room.setAttribute('src', 'porch.jpg');
	room.setAttribute('usemap', '#porchmap');
}
function garage(e) {
	e.preventDefault;
	var room = document.getElementById('currentroom');
	room.setAttribute('src', 'garage.jpg');
	room.setAttribute('usemap', '#garagemap');
}

//Functions when clicking on all the objects
// THis isn't working yet.
/*var eventNames = [{functionname:"maskClick", p: "You put on your Ninja mask."}, 
					{functionname: "magazineClick", p: "yay"},
					{functionname: "lampClick", p:"superyay"},
					{functionname: "tvClick", p: "tvtvtv"},
					{functionname: "applesClick", p:"apples hooray"}]

function lrClick(e) {
	var clickName = document.getElementById()+"Click";
	document.write(clickName);
}


function maskClick(e) {
	e.preventDefault();
	var tracker = document.getElementById('actiontext');
	tracker.innerHTML = '<p>You put on your ninja mask, hooray!</p>';
}
*/

//Scoring

var score = 0;
var score100 = false;

function scoreCard(x){
	score = score + x;
	var output = document.getElementById('output');
	output.innerHTML = score;
	checkScore(score);
}

function checkScore(z){
	if (score > 99) {
		alert("The intruder, in poor health because of all the bruises, scratches and stab wounds, falls over nearly dead.  Also, the police arrive and arrest him.  GREAT JOB, you won!!");
			window.location.reload(true);
	}
	else console.log("keep going");
}



//Items Array
var testArray = [	//Living Room
					{a: "mask", 
						b: "Now you are ready for the hunt.  Hover and click other items to help you get the intruder.  Try to get as many points as possible.", 
						c: 5},
					{a: "tv", 
						b: "Great, it's the Golden Girls but you have no time to watch.  You have to get the intruder.", 
						c: -5},
					{a: "lamp", 
						b: "Shards of lamps went into his arms!  Huzzah!", 
						c: 10},
					{a: "magazine", 
						b: "Why do you think there's time to read HTGTV mag?!  You have to catch the intruder!", 
						c: -10},
					{a: "apples", 
						b: "That wasn't so smart.  Now there's apple all over the wall and that's going to be hard to clean.  But you did get a solid hit.", 
						c: 5},
					//Kitchen
					{a: "drink", 
						b: "Mmmmm a very fine bourbon.  But you have decreased your ninja-ing abilities by being drunk.", 
						c: -5},
					{a: "teatowel", 
						b: "Good job, the blood won't stain your floor now.", 
						c: 5},
					{a: "pot", 
						b: "THUNK.  Yeah, that's going to leave a mark.  But he still got away.", 
						c: 5},
					{a: "tomato", 
						b: "You totally missed.", 
						c: -5},
					{a: "knife", 
						b: "Yeah buddy, a nice leg wound.  But now he is bleeding ALL OVER YOUR FLOOR.  Maybe use the towel to clean that up?", 
						c: 15},
					{a: "stove", 
						b: "Great, maybe now he will burn his hand.", 
						c: 5},
					{a: "whisk", 
						b: "What are you planning to do with a whisk?!  Bake the intruder a cake?!", 
						c: -5},
					//Study
					{a: "paintbrush", 
						b: "He didn't like that very much.", 
						c: 5},
					{a: "scissors", 
						b: "YEAH!  Stab wound FTW.", 
						c: 15},
					{a: "door", 
						b: "White cat!!  Who scratches the intruder violently.  Yay white cat!", 
						c: 10},
					//Master Bedroom
					{a: "pillow", 
						b: "No time for naps, Boo!!!", 
						c: -10},
					{a: "closet", 
						b: "Good, that's more comfortable for fighting crime.", 
						c: 5},
					{a: "cell", 
						b: "They are on the way!", 
						c: 10},
					{a: "tote", 
						b: "A NINJA STAR!  You throw the star and hit him!  Yay.  Also, you find chapstick in the tote.", 
						c: 15},
					//Guest Room
					{a: "guestbed", 
						b: "Roo will be so happy!!!!!!!", 
						c: 20},
					{a: "sewingmachine", 
						b: "That can probably wait until later, Boo.", 
						c: -5},
					{a: "needles", 
						b: "You put needles in his eyes.  This is no regular acupuncture therapy, BEEOTCH.", 
						c: 15},
					//Bathroom
					{a: "toilet", 
						b: "Now that that's done, you can keep chasing the intruder!", 
						c: 5},
					{a: "rx", 
						b: "But how will you get him to drink it?!", 
						c: -5},
					{a: "closet2", 
						b: "He's melting!!!  Huzzah!", 
						c: 10},
					//Porch
					//{a: "tv", 
					//	b: "tvtest", 
					//	c: 10},
					//Garage
					//{a: "screwdriver", 
					//	b: "tvtest", 
					//	c: 10}
					]

function clicked(item){
	//console.log($(item).attr("id"));
	var output = document.getElementById('output');
	var tracker = document.getElementById('actiontext');
	var clickname = ($(item).attr("id"));
	//console.log(clickname);
	//console.log(testArray[0].a);
	for (var i = 0; i < testArray.length; i++) {	
		if (testArray[i].a === clickname) 
			{ scoreCard(testArray[i].c);
			  tracker.innerHTML = testArray[i].b;
				}
		else console.log("no");
	}
}

/*function maskClick(e) {
	e.preventDefault();
	var tracker = document.getElementById('actiontext');
	tracker.innerHTML = '<p>You put on your ninja mask, hooray!</p>';
	var maskScore = 5;
	scoreCard(maskScore);
}*/

/*For future reference if we need it
function magazineClick(e) {
	e.preventDefault();
	var tracker = document.getElementById('actiontext');
	tracker.innerHTML = '<p>The magazine hit the intruder, but they got away.</p>';
	var magazineScore = 10;
	scoreCard(magazineScore);
}
*/
