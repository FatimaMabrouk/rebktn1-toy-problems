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
var Stack = function () {
  this.storage = {}
  this.top = 0


  // add an item to the top of the stack
  this.push = function (value) {
    this.storage[this.top++] = value


  };


  // remove an item from the top of the stack
  this.pop = function () {
    if (this.storage[--this.top]) {
      var tmp = this.storage[this.top]
      delete this.storage[this.top];
      return tmp
    }
    return 'empty stack!!!!!!'


  };

  // return the number of items in the stack
  this.size = function () {
    return this.top
  };

  // return the minimum value in the stack
  this.min = function () {
    var min = this.storage[0]
    for (var key in this.storage) {
      if (this.storage[key] < this.min) {
        min = this.storage[key]
      }
    }
    return min
  };

};

