// *
//  * Write a stack using your preferred instantiation pattern. Implement a min function
//  * that returns the minimum value of all the elements in the stack in constant time.stack.  

//  * All of the functions in the Stack should run in constant time!
//  *
//  * var example = new Stack()
//  *  example.push(4)
//  *  example.push(3)
//  *  example.min() === 3
//  *  example.push(3)
//  *  example.push(2)
//  *  example.push(2)
//  *  example.min() === 2
 





var Stack = function() {

    this.storage = [];
    this.minValueStorage = [];

}

Stack.prototype.push= function(value) {

    if (!this.minValueStorage.length ||
          value <= this.minValueStorage[this.minValueStorage.length - 1]) {
        this.minValueStorage.push(value);
      }
      this.storage.push(value);

}
Stack.prototype.pop  = function() {

      var value = this.storage.pop();
      if (value === this.minValueStorage[this.minValueStorage.length - 1]) {
        this.minValueStorage.pop();
      }
      return value;
        };

Stack.prototype.size = function() {

      return this.storage.length;
        };
  
  // return the minimum value in the stack
Stack.prototype.min = function() {

      return this.minValueStorage[this.minValueStorage.length - 1];
    
    };



