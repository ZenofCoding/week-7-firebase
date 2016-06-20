
//Firebase//
var trainData = new Firebase("hhttps://trainschedule101.firebaseio.com/");



//Add trains//
$("#addTrainBtn").on("click", function(){

	//Grabs User values//
	var trainName = $("#trainInput").val().trim();
	var destination = $("#destination").val().trim();
	var firstTrainUnix = moment($("#firstTrain").val().trim(), "HH:mm").subtract(10, "years").format("X");
	var frequency = $("#frequency").val().trim();

	// Holds temp. train data //
	var newTrain = {
		name:  trainName,
		destination: destination,
		firstTrain: firstTrainUnix,
		frequency: frequency
	}

	// Uploads train data to the database//
	trainData.push(newTrain);

	// Logs everything to console//
	console.log(newTrain.name);
	console.log(newTrain.destination); 
	console.log(firstTrainUnix);
	console.log(newTrain.frequency)

	// Alert
	alert("Train successfully added");

	// Clears all of the text-boxes
	$("#trainInput").val("");
	$("#destination").val("");
	$("#firstTrain").val("");
	$("#frequency").val("");


	return false;
});



trainData.on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

	// Stores variables
	var tName = childSnapshot.val().name;
	var tDestination = childSnapshot.val().destination;
	var tFrequency = childSnapshot.val().frequency;
	var tFirstTrain = childSnapshot.val().firstTrain;
	var differenceTimes = moment().diff(moment.unix(tFirstTrain), "minutes");
	var tRemainder = moment().diff(moment.unix(tFirstTrain), "minutes") % tFrequency ;
	var tMinutes = tFrequency - tRemainder;
	var tArrival = moment().add(tMinutes, "m").format("hh:mm A"); 
	console.log(tMinutes);
	console.log(tArrival);
	console.log(moment().format("hh:mm A"));
	console.log(tArrival);
	console.log(moment().format("X"));


	$("#trainTable > tbody").append("<tr><td>" + tName + "</td><td>" + tDestination + "</td><td>" + tFrequency + "</td><td>" + tArrival + "</td><td>" + tMinutes + "</td></tr>");

});


