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
var res1 = [];
var res2 = [];
  function recurse(obj,arr){
    for (key in obj){
      arr.push(key)
      arr.push(obj[key])
      if(typeof obj[key] === "object"){
        recurse (obj[key],arr)
      }
    }
  }
recurse(apple,res1)
recurse(orange,res2)
return res1.join(",") === res2.join(",")

};
