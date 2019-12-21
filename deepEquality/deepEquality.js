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

//Done    

var deepEquals = function(apple, orange) {
	var keys1 = Object.keys(apple);
	var keys2 = Object.keys(orange);
	//if the two inputs have different number of elems return false
	if(keys1.length !== keys2.length) {
		return false;
	}
	//loop inside the two objets
	for(var key of keys1) {
		//if both elements at the same spot are not both objects with different values return false
		if(typeof apple[key] !== "object" || typeof orange[key] !== "object") {
			if(apple[key] !== orange[key]) {
				return false;
			}
		}
		//if both elements at the same spot are both objects the check their values with recursion
		if(typeof apple[key] === "object" && typeof orange[key] === "object") {
			return deepEquals(apple[key], orange[key])
		}
	}
	//if no previous "return false" was "activated", that's mean we have deep equality, so "return true"
	return true
};
