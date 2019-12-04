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

console.clear()

// decimal number 463 is coded as "341010":
// 463 (base 10) = 3×5! + 4×4! + 1×3! + 0×2! + 1×1! + 0×0!


var dec2FactString = function(nb) {

}

var factString2Dec = function(str) {

}

// Find the start using helper function
// Loop from start
//	Break when number is equal to given number

var convert = function(number) {
    let result = 0;
    let str = '';
    let c = 0;

    while (factorial(c) < number) {
        console.log(c)
        if (c === 0 && factorial(c) < number) {
            result += (c * factorial(c));
            str += 0;
        } else if (c === 1 && factorial(c) < number) {
            result += (c * factorial(c));
            str += c;
        } else if (c > 1 && factorial(c) < number) {
            for (var k = 0; k <= c; k++) {
            }
        }
        c++;
    }
    console.log({
        result
    })
}

// Factorial helper
var factorial = function(n) {
    let c = 1;
    let result = 1;

    while (c <= n) {
        result *= c;
        c++;
    }

    return result;
}

// Find the start 
var findStart = function(number) {
    let result = 0;
    let c = 0;

    while (true) {
        if (factorial(c) > number) {
            return c - 1;
        }
        c++;
    }
}
