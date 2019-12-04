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

//function that give the factorial of any number
function factorial(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1)
}
//function that will sum all the numbers in  an array
function sum(array) {
    if (array.length === 0) {
        return 0;
    }
    return array[0] + sum(array.slice(1));
}
function factString2Dec(str) {
    //transform the string into an array and reverse it
    string = str.split('').reverse();
    result = [];
    //loop over the new array
    for (var i = 0; i < string.length; i++) {
        //push into the result (the factorial of i * the current elm in the array)
        result.push(parseInt(string[i]) * factorial(parseInt(i)));
    }
    //return the sum of the result array
    return sum(result);
}

function dec2FactString(nb) {

}