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
class Stack {
  constructor() {
    this.storage = new Object;
    this.minimum = [];
    this.count = 0;
  }
  // add an item to the top of the stack
  push(value) {
    this.count += 1;
    this.storage[this.count] = value;
    if (value <= this.minimum[this.minimum.length - 1] || !this.minimum[0]) this.minimum.push(value);
  };

  // remove an item from the top of the stack
  pop() {
    var popedValue = this.storage[this.count];
    delete this.storage[this.count];
    if (popedValue === this.minimum[this.minimum.length - 1]) this.minimum.pop()
    this.count -= 1;
    return popedValue
  };

  // return the number of items in the stack
  size() {
    return this.count;
  };

  // return the minimum value in the stack
  min() {
    return this.minimum[this.minimum.length - 1];
  };
}


