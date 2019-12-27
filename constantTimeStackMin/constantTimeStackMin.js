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
  class Stack  {
    constructor(){
      this.storage = {};
      this.counter = 1; 
      this.sum = 0  
    }
  
  // add an item to the top of the stack
    push(value) {
      this.storage[this.counter++] = value;
      this.sum += value   
    }

  // remove an item from the top of the stack
  pop() {
    var temp = this.storage[this.counter];
    this.sum -= this.storage[this.counter]
    this.counter--;
    return temp;
    };

  // return the number of items in the stack
    size() {
      return this.counter-1
    }
  
  // return the minimum value in the stack
    min() {
      return this.sum / (this.counter-1)
  }
}

