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
		if(array[i] < 0) {
			count++;
			neg = array[i] * -1;
			result.push([neg,'neg']); // [ [5,'neg'] ]
		}
		else if(array[i] >= 0) {
			neg = array[i];
			result.push([neg,'pos']); 
		}

	}

	result.sort(function(a,b){return b[0]-a[0]});
	// console.log(result)
	// console.log(result[0][1])
	//recursive fnct;
	var negCount = 0;
    debugger;
	var rec = function(arr) {

		if( !arr[0] ) return;
		// console.log(arr)
			var check = arr[0];
			// console.log(check[1])
			if( check[1] == "neg" ) {
				negCount++;
			};

			if(negCount === 3) {
				return rec(arr.splice(1))
			} else{
				product = product * arr[0][0];
				return rec(arr.splice(1));
			}
		}
	rec(result);
		return product;
	}


	largestProductOfThree([1, 4, -5, -2])