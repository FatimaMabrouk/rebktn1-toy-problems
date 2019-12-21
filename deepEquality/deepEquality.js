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

 console.clear();

 var deepEquals = function(apple, orange) {
  let obj1 = toStrSpecial(apple);
  let obj2 = toStrSpecial(orange);
  return obj1 === obj2;
};

var toStrSpecial = function(obj) {
  let result = [];
  for (var key in obj) {
      if (typeof obj[key] === 'object') {
          let str = key + ':' + Object.entries(obj[key]);
          result.push(str);
      } else {
          let str = key + ':' + obj[key];
          result.push(str)
      }
  }
  return result.toString();
}

 