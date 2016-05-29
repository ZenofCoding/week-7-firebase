//* 5 movies
// pulp fiction
// shawshank redemption
// the lion king
// the truman show
// dazed and confused

//variable for every letter a-z 26 char
// on release key display letter
// else create letters used
//
var movies = ["pulp fiction", "shawshank redemption", "the lion king", "the truman show", "dazed and confused"] 
var choice = Math.floor(Math.random()*4)
var answer = movie[choice];
var myLength = answer.length;
var display = [myLenth];

$(document).ready(function()) {
	var min = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	
}

var setup = function()
{
alert(answer);
    for (var i=0; i<answer.length; i++)
    {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("game").innerHTML = output;
    output ="";
    
}
