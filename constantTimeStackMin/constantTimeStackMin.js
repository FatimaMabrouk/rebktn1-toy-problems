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

/**
  * Stack Class
  */
  var Stack = function() {

  // add an item to the top of the stack
    this.push = function(value) {
	    this.min = min || value;

		 	if (value < this.min) {
		 		this.min = value
		 	}
		  this.storage[++this.top] = value;
    };

  // remove an item from the top of the stack
    this.pop = function() {
		  var top = this.storage[this.top];
		  delete this.storage[this.top--];
		  
		  return top;
    };

  // return the number of items in the stack
    this.size = function() {
	  	return Object.keys(this).length;
    };
  
  // return the minimum value in the stack
    this.min = function() {
  		return this.min;
    };

  };


 //  var Stack = function() {
 //  	this.min;
 //  	this.top = -1;
 //  	this.storage = {}; 
	// };

 //  // add an item to the top of the stack
	//  Stack.prototype.push = function(value) {
	//  	this.min = min || value;
	//  	if (value < this.min) {
	//  		this.min = value
	//  	}
	//   this.storage[++this.top] = value;
	// };

 //  // remove an item from the top of the stack
	// Stack.prototype.pop = function() {

	//   var top = this.storage[this.top];
	//   delete this.storage[this.top--];
	  
	//   return top;
	// };

 //  // return the number of items in the stack
	// Stack.prototype.size = function() {
	//   return Object.keys(this.storage).length;
	// };

 //  // return the minimum value in the stack
 //  Stack.prototype.min = function() {
 //  	return this.min;
 // 	};
