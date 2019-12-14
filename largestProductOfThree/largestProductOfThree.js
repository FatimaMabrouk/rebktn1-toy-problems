/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

largestProductOfThree ( [ 2, 1, 3, 7 ] ) // 42
largestProductOfThree ( [ 0, 2, 3 ] )    //  0
largestProductOfThree ( [1, 4, -5, -2] ) // 40
*/

function largestProductOfThree(array) {
	let resuilt = [];
	for (var i = 0; i < array.length; i++) {
		array[i] = Math.abs(array[i]);
	}
	if(array.length < 3)
		return undefined;
	else if(array.length == 3)
		return array.reduce((accumulator,currentValue)=>accumulator*currentValue);

	else {
		for (var i = 0; i < 3 ; i++) {
			index = array.indexOf((array[array.indexOf(Math.max(...array))]));
			resuilt.push(array[index]);
			array[index] = 0;
			}
		}
		return resuilt.reduce((accumulator,currentValue)=>accumulator*currentValue);
		
}

////