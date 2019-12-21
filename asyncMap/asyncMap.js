'use strict';

/* Implement the function asyncMap:
 *
 * asyncMap has two parameters,
   1 an array of  asynchronous  functions  ( tasks ) 
   2 and a final-result callback.

 * Each of the tasks receives a task-specific callback that must be invoked when the task completes.
 * The final-result callback passed to asyncMap receives the results collected by the task-specfic callbacks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to asyncMap.
 *
 * Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
 * on the results array.
 *
 *
 * Example:
 *
 * asyncMap([
 *  function(cb){
 *    setTimeout(function(){
 		next(); // there well need to be something here that well call the next function in the array respactvly 
 *      cb('one');
 *    }, 200);
 *  },
 *  function(cb){
 *    setTimeout(function(){
 *      cb('two');
 *    }, 100);
 *  }
 * ],
 *  function(results){
 *    // the results array will equal ['one','two'] even though
 *    // the second function had a shorter timeout.
 *    console.log(results); // ['one', 'two']
 * });
 *
 *
 */


var asyncMap = function(tasks, callback) {
	let results = []
	cb = e => {results.push(e)}
	tasks.forEach( task => {task(cb)} ) // this line needs nodifation ??!!!!!
	callback(results);
};

asyncMap([
  function(cb){
    setTimeout(function(){
      cb('one');
    }, 200);
  },
  function(cb){
    setTimeout(function(){
      cb('two');
    }, 100);
  },function(cb){
    setTimeout(function(){
      cb('three');
    }, 300);
  }
 ],
  function(results){
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
    console.log(results); // ['one', 'two']
 });



 // tasks.forEach( (task , i) => {
 //    task( (arguments) => {

 //      results[i] = arguments;
 //      complete ++;
 //      if (complete === tasks.length) {
 //        callback(results);

 //      }
 //    })