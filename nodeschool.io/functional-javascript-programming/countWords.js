/*
 * Given an Array of strings, use Array#reduce to create an object that contains
 * the number of times each string occured in the array.
 * Return the object directly (no need to console.log).
 *
 * Example
 *
 *  var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
 *  console.log(countWords(inputWords))
 *  // =>
 *  // {
 *  //   Apple: 2,
 *  //   Banana: 1,
 *  //   Durian: 3
 *  // }
 */

function countWords ( inputWords ) {

	var result = {};
//	var word = '';
	var cntr = 0;

	inputWords.sort().reduce( function (prev, curr) {

		if (curr != prev)
			cntr = 1;
		else
			cntr++;

		result[curr.toString()] = cntr;

		return curr.toString();

	}, '');

	return result;
};
module.exports = countWords;