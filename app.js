$(document).ready(function(){
	readInData("data/feedback.txt");
});

// use the variable displayData to capture data from the given file
var displayData;

// function readInData reads data from a given file
function readInData(filename){
	$.get(filename, function(data){
		data = removeLines(data);
		data = data.splice(1);
		data = removeDates(data);
		animateData(data);
	}, "text");};


function removeLines(string){
	string = string.split("\n");
	return string;
}

function removeDates(array){
	for (var i= 0; i<array.length; i++){
		var newArray = array[i].split("\t");
		array[i] = newArray[1];
	}
	return array;
}
//function animateData
function animateData(array){
	for (var i=0; i<array.length; i++){
		$(".display").append("<div class='shoutout' id='shoutout"+i+"'></div>");
		$("#shoutout"+i).text(array[i]);
	}
	$("#showcase").text(array[1]);

	setInterval(function(){
		var el = array.length;
		el = randomNumber(0, el);
		$("#showcase").fadeOut("slow", function() {
			$("#showcase").text(array[el]);});
		$("#showcase").fadeIn("slow");
	}, 5000);


}

//Generate a random integer given a minimum and maximum range value
//Author: Scott Bromander
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);}
