
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

//I used an array to store the value in and used two for loops to check for the output of a and b if it equals the sum of all the numbers from 1 to n excluding a and b as arrays and push the correct output in the array and an if condition to check for the length in order to only return the correct answer and an if condition toe check for the n if it's zero or less it will return Invalid input.
// and in order to check foe the sum of the numbers I created a new function to return the sum from 0 to n.


function sum(number) {
	var count = 0;
	for (var i = 0; i <= number; i++) {
		count +=i;
	}
	return count;
}

function removNb(number) {
	var array = [];
	if (number > 0) {
		for (var i = 1; i <= number; i++) {
			for (var j = 1; j <= number; j++) {
				if (j * i === (sum(number)- j - i)) {
					array.push([i, j]);
				}
			}
		}
		if (array.length > 2) {
			array = [];
		}
		return array;
	}
	else {
		return 'Invalid input';
	}
}

removNb(26)