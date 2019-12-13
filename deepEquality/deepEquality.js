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
  * don't worry about handling  object structures.
  *
  */
var deepEquals = function(object1, object2) {
  // stop condtion is done w/ for loop
    //iterate
    for (var key in object1) {
      if (typeof(object1[key]) ==='object' ||typeof(object2[key]) ==='object') {
      returne  deepEquals(object1[key], object2[key]);
      }
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
    return true;
};


    // if ( deepEquals() ) {
    //   return true;
    // }

//===
//declare a state variable
// Assign empty array of object1 && object 2 keys.
var obj1keyArr = Object.keys(object1)
var obj1ValArr = Object.values(object1)


// Assign empty array of object1 && object 2 value.
var obj2keyArr = Object.keys(object2)
var obj2ValArr = Object.values(object2)