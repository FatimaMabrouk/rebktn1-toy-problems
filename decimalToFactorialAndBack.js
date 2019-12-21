// Coding decimal numbers with factorials is a way of writing out numbers in a base system that depends on factorials,
// rather than powers of numbers.

// In this system, the last digit is always 0 and is in base 0!.
// The digit before that is either 0 or 1 and is in base 1!. The digit before that is either 0, 1, or 2 and is in base 2!.

// More generally, the nth-to-last digit is always 0, 1, 2, ..., or n and is in base n!.
// Example :

// decimal number 463 is coded as "341010":

// 463 (base 10) = 3×5! + 4×4! + 1×3! + 0×2! + 1×1! + 0×0!

// If we are limited to digits 0...9 the biggest number we can code is 10! - 1.

// So we extend 0..9 with letters A to Z. With these 36 digits we can code up to

// 36! − 1 = 37199332678990121746799944815083519999999910 (base 10)

// We will code two functions. The first one will code a decimal number and return a string with the factorial representation :
// dec2FactString(nb)

// The second one will decode a string with a factorial representation and produce the decimal representation : factString2Dec(str).

// Given numbers will be positive.

//the last digit is always 0 and is in base 0!.

function factorial(x) {
  return (x > 1) ? x * factorial(x-1) : 1;
}


function dec2FactString(nb){
	var i = 1
	var j =1

	//find upper limit
	while (nb/factorial(i) >= 1) {
		i++ 
	}

	//initiate array
	var acc = new Array(i)
	for (var k = 0; k < acc.length; k++) {
		acc[k] = 0
	}

	// recursively modify acc array using helper function
	function helper(num){
		var index = 0;

		if (num === 0){
			return null
		}

		while (num/factorial(index) >= 1) {
			index++ 
		}

		acc[acc.length - index]++

		console.log(acc[acc.length - index]++)

		helper(num-factorial(index))

	}

	helper(nb)

	return acc.join('')
}
