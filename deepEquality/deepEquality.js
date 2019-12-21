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
var deepEquals = function (apple, orange) {
  //loop over the objects
  for (let key in apple) {
    //check if the current element is an object or array
    if (typeof apple[key] === "object") {
      //use recursion to call the function again 
      if (!deepEquals(apple[key], orange[key])) return false;
    } else {
      //if the two elements are different return true
      if (apple[key] !== orange[key]) {
        return false;
      }
    }
  }
  return true;
};
