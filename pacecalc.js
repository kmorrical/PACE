
var button = document.getElementById('calculatePace');

button.onclick = function() {
	var enterHours = document.getElementById('enterHours');

	var runHours = enterHours.value;

	console.log(runHours);

	var enterMinutes = document.getElementById('enterMinutes');


	var runMinutes = enterMinutes.value;

	console.log(runMinutes);

	var enterSeconds = document.getElementById('enterSeconds');

	var runSeconds = enterSeconds.value;

	console.log(runSeconds);

	var enterDistance = document.getElementById('enterDistance');

	var runDistance = enterDistance.value;

	console.log(runDistance);

	var runnerHours = runHours * 60 * 60;
	// + (runMinutes * 60) + runSeconds;

	console.log(runnerHours);

	var runnerMinutes = runMinutes * 60;

	console.log(runnerMinutes);

	var runnerPace3 = Number(runnerHours) + Number(runnerMinutes) + Number(runSeconds);

	console.log(runnerPace3);

	var runnerPace2 = runnerPace3 / runDistance ;

	console.log(runnerPace2);

	var runnerPace1 = runnerPace2 / 60;

	console.log(runnerPace1);

	var paceSec = (((runnerPace1+"").split(".")[1]));

	paceSec = paceSec*60/100;

	var paceSecString = paceSec.toString();

	var paceSec1 = paceSecString.substring(0, 2);

	console.log(paceSec1);


	var paceMin = (runnerPace1+"").split(".")[0];

	console.log(paceSec);
	console.log(paceMin);
	
	var message = 'Pace: ' + paceMin + ':' + paceSec1;

	var output = document.getElementById('output');

	output.innerHTML = message;
}