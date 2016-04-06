function stopTimer(t) {
	clearInterval(t);
}

function printGoodbye() {
	console.log("Goodbye World.");
}

function printHello() {
	console.log("Hello World.");

	// call function EVERY 1 second
	var t = setInterval(printGoodbye, 1000);

	// stop the timer after 5 seconds
	//setTimeout(stopTimer(t), 5000);
}

// Call function after 2 seconds
setTimeout(printHello, 2000);