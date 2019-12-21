'use strict';

/* Implement the function asyncMap:
 *
 * asyncMap has two parameters, an array of asynchronous functions (tasks) and a final-result callback.
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

/**
 * 
 * @param {Array} tasks  array of functions that will be executed
 * @param {Function} callback finnal call back will be executed at the end, it takes result array as a param
 * @param {Array} result the user doesnt need to send this param, its here to collect the results from tasks
 * @param {Function} collectResult the user doesnt need to send this param, its callback function for each task, it will push values to the result array
 *  
 */

let asyncMap = (
                tasks, 
                callback, 
                result = [], 
                collectResult = (item) => result.push(item)
                ) => {
    tasks.forEach(func => func(collectResult));
    return callback(result);
};
