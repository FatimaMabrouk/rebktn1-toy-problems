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

  var tab1 = ObjToTable(apple)
  var tab2 = ObjToTable(orange)
  var i = 0
 // console.log(tab1[0],tab2[0])
  
  function check(tab1, tab2) {

  }
  check(apple,orange)
}


function ObjToTable(obj) {
  var result = []
  for (key in obj) {
    result.push([key, obj[key]]) 
  }
  return result 
}
//check each element 