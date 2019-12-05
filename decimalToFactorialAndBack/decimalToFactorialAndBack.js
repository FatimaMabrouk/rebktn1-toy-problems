// Coding decimal numbers with factorials is a way of writing out numbers in a base system that depends on factorials, rather than powers of numbers.

// In this system, the last digit is always 0 and is in base 0!.
// The digit before that is either 0 or 1 and is in base 1!. The digit before that is either 0, 1, or 2 and is in base 2!.

// More generally, the nth-to-last digit is always 0, 1, 2, ..., or n and is in base n!.
// Example :

// decimal number 463 is coded as "341010":

// 463 (base 10) = 3×5! + 4×4! + 1×3! + 0×2! + 1×1! + 0×0!
1X0!1X1!1X2!1X3!1X4!1X5!1X6!"
// If we are limited to digits 0...9 the biggest number we can code is 10! - 1.

// So we extend 0..9 with letters A to Z. With these 36 digits we can code up to

// 36! − 1 = 37199332678990121746799944815083519999999910 (base 10)

// We will code two functions. The first one will code a decimal number and return a string with the factorial representation : dec2FactString(nb)

// The second one will decode a string with a factorial representation and produce the decimal representation : factString2Dec(str).

// Given numbers will be positive.


//================ OICE ==============
//input	 = decimal number
//Output = string



var dec2FactString = function (nb) {

	var string         = arguments[1] ||'';
	var factorialIndex = arguments[2] || 0; 
	var base           = 0;
	//recurisely
	// stop condtion when the nb reaches 0
	if (nb === 0) {
		//return the string of factorials
		return string;
	}	
	// while mod is is not equal to zero 

	nb     -= nb %factorialIndex * factorial(factorialIndex);
	string += `${base}X${factorialIndex}!`;

	dec2FactString(nb, string, factorialIndex +1);
};


var factorial = function (number) {
	if (number === 0) {
		return 1;
	}
		return number * factorial(number-1)
};