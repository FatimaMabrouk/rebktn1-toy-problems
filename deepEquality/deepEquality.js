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

  // I gave it my best shot.

  
var deepEquals = function(apple, orange) {
	var result = false;

for (var key in apple) {
	if (Object.keys(apple).join('') === Object.keys(orange).join('')) {
		if (Object.values(apple).join('') === Object.values(orange).join('')) {
			result = true;
		}
	}
}
	
		if (Object.values(apple).join('') === Object.values(orange).join('')) {
			result = true;
		}
	return result;
};

deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false