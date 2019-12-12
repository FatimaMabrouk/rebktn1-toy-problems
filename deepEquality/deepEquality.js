/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange) {
  for(var key in apple){
    for (var keyOrange in orange){
      if(key !== keyOrange){
        return false;
      }
      else if(typeof apple[key] === "onject"){
        deepEquals(apple[key], orange[keyOrange])
      }
      else{
        if(apple[key] !== orange[keyOrange]){
          return false
        }
      }
      
    } 
  }
  return true;
  
};
