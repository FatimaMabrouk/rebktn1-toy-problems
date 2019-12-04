
//     A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
//     Within that sequence, he chooses two numbers, a and b.
//     He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
//     Given a number n, could you tell me the numbers he excluded from the sequence?

// The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]

// with all (a, b) which are the possible removed numbers in the sequence 1 to n.

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ...will be sorted in increasing order of the "a".

// It happens that there are several possible (a, b). The function returns an empty array (or an empty string) if no possible numbers are found which 
//will prove that my friend has not told the truth! (Go: in this case return nil).
//
//
// Example:
// removNb(26) should return [ {15, 21}, {21, 15} ]
var remobNB = function (n) {
		var sumOfNum;
		var array = [];
	//creates an array frorm n [1...n]
		while (!!n) {
			array.push(n);
			n--;
		}

		//check the sum of all numbers
		 function sum (array) {
			return array.reduce(function(acc, element) {
			return acc += element;
			})
		}
		sumOfNum = sum(array);
		var newArr = [];
		function prod (elem) {
			for ( var i = 0; i < array.length; i++ ) {
				if ( ( array[i] * elm )  === sumOfNum ) {
					return newArr.push(array[i], elm)
				} 
			}
			prod(array[array.lenght])
		}
		//if ( array.includes ( sumOfNum / Math.max(...array) ) )

}



/*
var makeArray = function(n) {
	var array = [];
	while (!!n) {
		array.push(n);
		n--;
	}
	return array.sort();
}

var sum = function(array) {
	return array.reduce(function(acc, element) {
	return acc += element;
	})
}
*/