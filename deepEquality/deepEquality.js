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

	var myApple = JSON.stringify(apple);
	var myOrange= JSON.stringify(orange);
	return myOrange === myApple;
};
//*******************Solution 2***********************
var deepEquals = function(apple, orange) {
var equal =true
	for(var key in apple){
		// if their's object
		if(typeof apple[key] === 'object' && typeof orange[key] === 'object'){
			equal = deepEquals(apple[key], orange[key]) && equal
		}else{
			 if(apple[key] !== orange[key]){
		      return  false
		   }
		} 
	   
	}
	return equal
};