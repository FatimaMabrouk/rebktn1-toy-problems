/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.  

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

// I used an object to store all the values and a value variable to save the value.

/**
  * Stack Class
  */
  var Stack = function() {
  	this.stack = {};
  	this.value = 0;

  // add an item to the top of the stack
    this.push = function(value) {
    	this.value = value;
    	this.stack[this.value] = this.value;
    };

  // remove an item from the top of the stack
    this.pop = function() {
    	delete this.stack[this.value];
    };

  // return the number of items in the stack
    this.size = function() {
    	return Object.keys(this.stack).length;
    };
  
  // return the minimum value in the stack
    this.min = function() {
    	return Object.values(this.stack).sort()[0];
    };

  };


 var example = new Stack()
  example.push(4)
  example.push(3)
  example.min() //=== 3
  example.push(3)
  example.push(2)
  example.push(2)
  example.min() //=== 2
