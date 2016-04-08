function repeat(operation, num) {

	for (var i = 0; i < num; i++)
		operation();

}
module.exports = repeat

/* with recursion 

	if (num <= 0) return
	operation()
	return repeat(operation, --num)
*/