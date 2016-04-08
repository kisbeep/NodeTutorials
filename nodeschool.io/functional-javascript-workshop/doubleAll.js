/*
convert the following from a for-loop to Array#map:

function doubleAll(numbers) {
	var result = []
	for (var i = 0; i < numbers.length; i++) {
		result.push(numbers[i] * s)
	}
	return result
}
module.exports = doubleAll
*/

function doubleAll(numbers) {

	var result = numbers.map( function (num) {
		return num * 2
	})
	return result

}
module.exports = doubleAll
