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
 * 
 *   var greet =
 *  function(name){ return 'hi: ' + name;}
 * 
 *   var exclaim =
 *  function(statement) { return statement.toUpperCase() + '!';}
 * 
 *   var welcome =
 *  compose(greet, exclaim);
 * 
 *   welcome( 'phillip' ); // 'hi: PHILLIP!'
 *------------------------------------------------------------

 *     return greet(exclaim(third(x)));     
 *           
 * 
 * compose(...arr){
 *  for i = 0 to lenght 
 *     return arr[0](arr[1](arr[2](zxc)));
 * } 
 * 
 * compose(...arr){
 *     return arr[i](arr[i+1]);
 *     
 * } 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * Step 2: Implement the function Pipe:
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
 */

'use strict';


// var greet =
//  *  function(name){ return 'hi: ' + name;}
//  * 
//  *   var exclaim =
//  *  function(statement) { return statement.toUpperCase() + '!';}
//  * 
//  *   var welcome =
//  *  compose(greet, exclaim);
//  * 
//  *   welcome( 'phillip' ); // 'hi: PHILLIP!'
//  * 
//---------------------------------------------------------------------------
// return greet(exclaim(third(param)));     
//  *           
//  *          
//  * compose(...functions){
//  *  for i = 0 to lenght 
//  *     return functions[i](functions[i+1](functions[i+2](param)));
//  * 
//  * } 
//  * 
//  * and then pipe is the revarse of all of the above

var compose = function(...functions) {
    var callback = (fucntion1,fucntion2)=>{
        fucntion1(fucntion2())
    }
};

var pipe = function(...functions) {
    
};
