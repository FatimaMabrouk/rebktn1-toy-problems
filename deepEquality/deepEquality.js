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

//sullotion 1
var deepEquals = function(apple, orange, result = true) {
  var appleKeys  = Object.keys(apple);
  var orangeKeys = Object.keys(orange);

  if(appleKeys.length !== orangeKeys.length){
    return false;
  }

  for(var i = 0; i < appleKeys.length; i++){
    if(apple[appleKeys[i]] === orange[appleKeys[i]]){
      result = (apple[appleKeys[i]] === orange[appleKeys[i]])  && true;
    } else {
      if(typeof apple[appleKeys[i]] === 'object'){
        return deepEquals(apple[appleKeys[i]], orange[appleKeys[i]], result);
      } else {
        return false;
      }
    }
  }
  return result;
}

//sollution 2
var deepEquals = function(apple, orange, o1 = undefined, o2 = undefined) {

  if (o1 && o1 === o2) return true;
  if (o1 && o1 !== o2) return false;
  for(var key in apple){
    if(!deepEquals(apple, orange, apple[key], orange[key]) && typeof apple[key] !=='object'){
      return false;
    }
    if(typeof apple[key] === 'object'){
      console.log(apple[key])
      return deepEquals(apple[key], orange[key])
    }
  }
  return true;
}