
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

// add all the numbers up n
////each time you pick two multiply them and see if their product equals to the the sum in a minus these two


function removNb(n){

	var i = 0, sum = 0; arr = [];

	while (i <= n) {
		sum = sum + i
		i++
	}

	// choose every possible combination of two numbers upto n


	for (var i = 1; i <= n; i++) {
		for (var j = 1; j <= n ; j++) {
			if (i!==j){
					console.log(sum - i - j, i * j )

				if (sum - i - j === i * j){
					arr.push([i,j])

					// put in an object where the sum is the key so no duplicates and you dont have filter 
					// out duplicates (a,b) and (b,a)
					// do this instead of pushing into an array

				}
			}
		}
	}

	if (arr.length === 0) return null;


	return arr;
	
}