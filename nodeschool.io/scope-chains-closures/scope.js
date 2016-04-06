function foo () {
	var bar = false;
	function zip () {
		var quux = 0;
		bar = true;
	}
	quux = 1;
	return zip;
}