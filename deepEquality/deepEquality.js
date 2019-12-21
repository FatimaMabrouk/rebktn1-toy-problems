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
	var len = Object.keys(apple).length ;
	var len1 =  Object.keys(orange).length;
	var result = true;

	if(typeof (apple) !== 'object' && typeof (orange) !== 'object'){
    return apple === orange;
  }
    if(len !== len1){
    return false;
  } 
  	for(var key in apple){
  		let key1 = apple[key]
  		let key2 = orange[key]
    if(deepEquals(key1, key2) !== true){
      	
      	result = false;
    }
  }
  		return result;
};
