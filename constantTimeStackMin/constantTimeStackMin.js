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
    this.storage = {};
    this.size = 0;
    this.minValue;
  }

  push(value) {
  	if(value < this.minValue || !this.minValue)
  		this.minValue = value;

    this.storage[this.size] = value;
    this.size++;
  }

  pop() {

    this.size && this.size--;
    var result = this.storage[this.size];
    delete this.storage[this.size];
    return result;
  }

  size() {
    return this.size;
  }


  min(){
  	return this.minValue;
  }
}