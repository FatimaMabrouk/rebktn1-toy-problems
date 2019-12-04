
//     A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
//     Within that sequence, he chooses two numbers, a and b.
//     He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
//     Given a number n, could you tell me the numbers he excluded from the sequence?

// The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]

// with all (a, b) which are the possible removed numbers in the sequence 1 to n.

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ...will be sorted in increasing order of the "a".

// It happens that there are several possible (a, b). The function returns an empty array (or an empty string) if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil).
//
//
// Example:
// removNb(26) should return [ {15, 21}, {21, 15} ]

var removNb = function(n){
	//create an array of numbers from 1 to the n passed in the function
	var numbers = [];
	for (var i = 1; i <= n; i++) {
		numbers.push(i);
	}
	//calculate sum of the array
	var sum = 0;
	for (var i = 0; i < numbers.length; i++) {
		sum = sum + numbers[i];
	}
	//pick 2 numbers and test if a*b - (a+b) = sum
	for (var i = 0; i < numbers.length; i++) {
		for (var j = 0; j < numbers.length; j++) {
		var a = numbers[i];
		var b = numbers[j];
		var product = a*b;
		
		//console.log('product is : ' + product);
		var abSum = a+b;
		//console.log('absum is : ' + abSum);
		var exclud = product - abSum;
		//console.log('exlud is : ' + exclud);
		//console.log('this is sum : ' + sum)
		if(exclud === sum){		
			return [a,b];
		}
		}
	}
	return "not found";
}