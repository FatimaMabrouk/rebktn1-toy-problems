
//     A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
//     Within that sequence, he chooses two numbers, a and b.
//     He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
//     Given a number n, could you tell me the numbers he excluded from the sequence?

// The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]

// with all (a, b) which are the possible removed numbers in the sequence 1 to n.

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ...will be sorted in increasing order of the "a".

<<<<<<< HEAD
// It happens that there are several possible (a, b). The function returns an empty array (or an empty string)
// if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil).
//
//
// Example:
// removNb(26) should return [ {15, 21}, {21, 15} ]


//a*b = sum() -(a+b)
var removNb = function(n) {
	//      a*b            
	//26 =(15*21 =315) = (sum(26) = 351) (a+b =36) (a*b)


	// sum() - (a+b)

	var sum = 0 ,  a = 0, b = 0;
	for (var i = 1; i <= n; i++) {
		sum +=i;
	}



	for (var a = 1; a <= n; a++) {
		for (var b = 1; b <= n; b++) {
			//if condition accure
			if((a*b) == sum -(a+b) ){
				return 'a:'+a +'b:' +b
			}
		}
	}
	return 'nil'
	
}
=======
// It happens that there are several possible (a, b). The function returns an empty array (or an empty string) if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil).
//
//
// Example:
// removNb(26) should return [ {15, 21}, {21, 15} ]
>>>>>>> 3e8981feec32ce5ef040bb114d4bebfdb879d9be
