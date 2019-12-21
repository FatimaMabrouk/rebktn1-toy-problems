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
	var newApple = Object.keys(apple)
	var newOrange = Object.keys(orange)

	if(newApple.length !== newOrange.length) {
		return false
	}
	for(var i = 0 ; i < newApple.length ; i++) {
		if(newApple[i] !== newOrange[i]) {
			return false
		}	
		if(newApple[i] === newOrange[i] && typeof apple[newApple[i]] ==='object' && typeof orange[newOrange[i]] ==='object' ){
			deepEquals(apple[newApple[i]],orange[newOrange[i]])
		}
	}

	return true
};
