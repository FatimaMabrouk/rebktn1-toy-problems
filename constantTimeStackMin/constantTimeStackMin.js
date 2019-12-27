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
    this.storage = [];
    this.end = 0;
    this.smallest = [];
  }

  // add an item to the top of the stack
  push(val) {
    this.storage[this.end++] = val;
    if (this.smallest.length === 0) {
      this.smallest.push(val);
    } else {
      this.smallest.push(val);
    }
  }

  // remove an item from the top of the stack
  pop() {
    let val = this.storage.pop();
    this.smallest.pop();
    this.end--;
    return val;
  }

  // return the number of items in the stack
  size() {
    return this.end;
  }

  // return the minimum value in the stack
  min() {
    return this.smallest[this.end - 1];
  }
}
