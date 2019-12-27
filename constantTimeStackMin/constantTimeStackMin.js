/**
 * Write a stack using your preferred instantiation pattern.

  Implement a min function
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
//================================================================================\\


//REQUIREMENETS\\
/*             
  push() ==> adds to the top of the stack.
  pop() ==> remove from the top of the stack.
  min() ==> return the min value of the elements in the stack.
*/
  //==============LOGIC===============\\
  /*
  //checks to sort the new element against the array of OBJ
  //push element

  //finds the index of the object that passes the test
      var array = [5, {1:1},{x: 1}, {x: 2}, 8, 130, 44];
      
      console.log(array.findIndex(obj => obj.x === 2));

//Array [4,5,7,8,9]

  //console.log(array.slice(array.length/2, array.length));
  //returns 7...9

  //console.log(array.slice(0, array.length/2));
  //return 4,5


  */
  var Stack = function() {

    var stack = [];
  // add an item to the top of the stack
    this.push = (value) => {
      var minHalf = this.stack.slice(this.stack.slice(0, array.length/2));
      var maxHalf = this.stack.slice(this.stack.length/2, this.stack.length);

      if(this.stack.length === 0) this.stack.push(value);
      else{
        if(value )
      }

    };

  // remove an item from the top of the stack
    this.pop = function() {
    };

  // return the number of items in the stack
    this.size = function() {
    };
  
  // return the minimum value in the stack
    this.min = function() {

    };

  };

