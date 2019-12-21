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


  //length apple !== length orange ? false :
  // for length apple key 
  //apple key [i] != orange key [i] ? false :
  //true
  //object of objeect ?
  //if orange & apple type of is object && !== array.isarray 
  //return deepEquals : return false
  //

var deepEquals = function(apple, orange) {
  var result;
  var appleLength = Object.keys(apple).length;
  var orangeLength = Object.keys(orange).length;

  var appleKey = Object.keys(apple);
  var orangeKey = Object.keys(orange);

  if(appleLength !== orangeLength) {
    return false;
  }
  else if(appleLength === orangeLength) {
    
    for(var i = 0; i < appleLength; i++) {
      if(appleKey[i] !== orangeKey[i]) {
        return false;
      }

      else if(appleKey[i] === orangeKey[i]) {
        /*for(var key in appleKey[i]) {
          if((typeof(appleKey[i][key]) === "object" && !Array.isArray(appleKey[i][key])) && 
            (typeof(orangeKey[i][key]) === "object" && !Array.isArray(orangeKey[i][key]))) {

            result = deepEquals(appleKey[i][key], orangeKey[i][key])
          }
           return true
        }*/
        return true;
      }
    }
  }
  return result;
};





/*var deepEquals = function(apple, orange) {
  var result;
  if(Object.keys(apple).length !== Object.keys(orange).length) {
    return false;
  }
  else if(Object.keys(apple).length === Object.keys(orange).length) {
    
    for(var i = 0; i < Object.keys(apple).length; i++) {
      if(Object.keys(apple)[i] !== Object.keys(orange)[i]) {
        return false;
      }
      else if(Object.keys(apple)[i] === Object.keys(orange)[i]) {
        
        if((typeof(Object.keys(apple)[i]) === "object" && !Array.isArray(Object.keys(apple)[i])) && 
          (typeof(Object.keys(orange)[i]) === "object" && !Array.isArray(Object.keys(orange)[i]))) {

          result = deepEquals(Object.keys(apple)[i],Object.keys(orange)[i])
        }
       
      }
    }
  }
  return result;
};*/


