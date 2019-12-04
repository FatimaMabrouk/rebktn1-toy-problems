// Coding decimal numbers with factorials is a way of writing out numbers in a base system that depends on factorials, rather than powers of numbers.

// In this system, the last digit is always 0 and is in base 0!.
// The digit before that is either 0 or 1 and is in base 1!. The digit before that is either 0, 1, or 2 and is in base 2!.

// More generally, the nth-to-last digit is always 0, 1, 2, ..., or n and is in base n!.
// Example :

// decimal number 463 is coded as "341010":

// 463 (base 10) = 3×5! + 4×4! + 1×3! + 0×2! + 1×1! + 0×0!

// If we are limited to digits 0...9 the biggest number we can code is 10! - 1.

// So we extend 0..9 with letters A to Z. With these 36 digits we can code up to

// 36! − 1 = 37199332678990121746799944815083519999999910 (base 10)

// We will code two functions. The first one will code a decimal number and return a string with the factorial representation : dec2FactString(nb)

// The second one will decode a string with a factorial representation and produce the decimal representation : factString2Dec(str).

// Given numbers will be positive.



//Factorial will be a global func accessible for both funcs
function factorial(number) {
	var fact = 1;
	for (var i = 1; i <= number; i++) {
		fact *= i;
	}
	return fact;
}	


/* First one works fine */
function dec2FactString(number) {
	var str = "";

	function maxFact(number) {
		for (var i = 1; i < number; i++) {
			if(factorial(i) > number) {
				return i-1
			}
		}
	}
  
	var max = maxFact(number); // which is 5 in the example 463 above 
	var number = number+1;
	
	function giveCode(number, max) {
		
		var coeff = 0;
		if(max === 0) {
			return str + 0;
		}
		while(coeff*factorial(max) < number) {
			coeff++
		}
		coeff--;
		str += coeff;
		number = number - coeff*factorial(max) ;
		max --;

		return giveCode(number, max)
	}

	return giveCode(number, max);
}


/* The second one works fine*/


function factString2Dec(string) {
	var len = string.length;
	var decim = 0;

	for(var i = 0; i < string.length; i++) {
		decim += factorial(len-1)*parseInt(string[i])
		len--
	}

	return decim;
}

