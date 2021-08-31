$(document).ready(function () {
	document.getElementById("lower").addEventListener("input", function () {
		assignNumbers();
	});
	document.getElementById("higher").addEventListener("input", function () {
		assignNumbers();
	});

	function assignNumbers() {
		document.getElementById("lowerButton").innerHTML =
			document.getElementById("lower").value != ""
				? document.getElementById("lower").value
				: "(Low value)";

		document.getElementById("higherButton").innerHTML =
			document.getElementById("higher").value != ""
				? document.getElementById("higher").value
				: "(High value)";
	}

	// number

	document.getElementById("button").addEventListener("click", function () {
		generateNumber();
	});

	function generateNumber() {
		var min = parseInt(document.getElementById("lower").value);
		var max = parseInt(document.getElementById("higher").value);
		var randInt = Math.floor(Math.random() * (max - min + 1) + min);
		if (randInt) {
			return (document.getElementById("output").innerHTML = randInt);
		} else {
			return (document.getElementById("output").innerHTML =
				"Sorry, there was an error.");
		}
	}
});
