/*
 * Write Compose and Pipe functions.
 * 
 * Step 1: Implement the function Compose: 
 *
 * Compose should return a function that is the composition of a list of
 * functions of arbitrary length.
 *
 * Each function is called on the return value of the function that follows.
 *
 * You can view compose as moving right to left through its arguments.
 *
 * Compose Example:
 *   var greet = function(name){ return 'hi: ' + name;}
 *   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
 *   var welcome = compose(greet, exclaim);
 *   welcome('phillip'); // 'hi: PHILLIP!'
 */
'use strict';


  // exclaim(greet(name))
var compose = function(functions) {
	var arrayOfFunctions = Array.from(arguments); //[function () {console.log('hi') }, function() {console.log('there') }]
	for(var i =0; i < arrayOfFunctions.length; i++) {
		//console.log(arrayOfFunctions[i]('philip'))
		return arrayOfFunctions[i+1]( arrayOfFunctions[i]() );
	}
};


/* Step 2: Implement the function Pipe:
 *
 * Pipe composes a series of functions and returns the resulting function.
 * 
 * Each function is called on the return value of the preceding function.
 *
 * You can view pipe as moving left to right through its arguments.
 * 
 * Pipe Example:
 *  var add2 = function(number){ return number + 2; }
 *  var multiplyBy3 = function(number){ return number * 3; }
 *  pipe(add2, multiplyBy3)(5) // 21
 *  pipe(add2, multiplyBy3, multiplyBy3)(5) // 63

 add2( multiplyBy3(number) )
 */

var pipe = function(arg) {
	var arrayOfFunctions = Array.from(arguments); 
	for(var i = 0; i < arrayOfFunctions.length; i++) {
		return arrayOfFunctions[i]( arrayOfFunctions[i+1]() );
	}
};


var add2 = function(number){ return number + 2; }
   var multiplyBy3 = function(number){ return number * 3; }
   // pipe(add2, multiplyBy3)(5) // 21
   pipe(add2, multiplyBy3, multiplyBy3)(5) // 63