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
     var holder = []

    // add an item to the top of the stack
      this.push = function(value) {
          if(holder.length === 0){
              holder[0] = value
          }else if(value < holder[0]){
          var holdThisForASec = holder[0] 
          holder[0] = value
          holder.push(holdThisForASec)
          }
      };
  
    // remove an item from the top of the stack
      this.pop = function() {
       holder[length] = null
      };
  
    // return the number of items in the stack
      this.size = function() {
        console.log(holder.length)
      };
    
    // return the minimum value in the stack
      this.min = function() {
        console.log(holder[0])
       
      };
  
    };

        var example = new Stack()
        example.push(4)
        example.push(3)
        example.min()
        example.push(3)
        example.push(2)
        example.push(2)
        example.push(2)
        example.min() 