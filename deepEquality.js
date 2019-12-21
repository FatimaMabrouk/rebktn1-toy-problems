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
  var edgeCase = edgeCase || false
  var funCompare = funCompare || false

  for (var key in apple) {
    if (typeof apple[key] === 'function') {
      edgeCase = true;
      funCompare = ""+apple[key] === ""+orange[key]

    }
  }

  for (var key in orange) {
    if (typeof orange[key] === 'function') {
      edgeCase = true;
      funCompare = ""+apple[key] === ""+orange[key]
    }
  }

  if (!edgeCase){
    return JSON.stringify(apple)===JSON.stringify(orange)
  }
  return funCompare
};
