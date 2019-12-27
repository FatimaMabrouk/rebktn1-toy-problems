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
    this.counter = 0 ;
    this.storage = [];
    this.mine
  // add an item to the top of the stack
    this.push = function(value) {
      this.storage[this.storage.length] = value
      this.counter++
      if(this.mine === undefined){
        this.mine = value
      }
      if(value<this.mine){
        this.mine = value
      }
    };

  // remove an item from the top of the stack
    this.pop = function() {
      this.storage.splice(this.storage.length-1,this.storage.length)
      this.counter--
    };

  // return the number of items in the stack
    this.size = function() {
      return this.counter
    };
  
  // return the minimum value in the stack
    this.min = function() {
      return this.mine
    };
  };

