/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

largestProductOfThree([ 2, 1, 3, 7 ]) // 42

largestProductOfThree([ 0, 2, 3 ]) //	0

largestProductOfThree([1, 4, -5, -2]) // 40
*/

////////////////////////////////////////////////////////////////////
function largestProductOfThree(array) {

	var result = [];
	var product = 1;
	var count = 0;

	//to create an array of arrays with key as positive numbers and values
		//as preiously positive or negative

	for( var i = 0; i < array.length; i++ ) {

		var neg = 0;
		if(result[i] < 0) {
			count++;
			neg = result[i] * -1;
			result[i].push([neg,'neg']); // [ [5,'neg'] ]
		}
		else if(arra[i] >= 0) {
			neg = result[i];
			result[i].push([neg,'pos']); 
		}

	}

	result.sort(function(a,b){return b[0]-a[0]});


	//recursive fnct;
	var negCount = 0;
	var rec = function(array) {

			if(array[0][1] === 'neg') {
				negCount++
			};
			if(negCount === 3) {
				return rec(result.splice(1))
			};
			else{
				product = product * array[0][0];
				return rec(result.splice(1));
			}
		}


	rec(result);

		return product;
	
	}