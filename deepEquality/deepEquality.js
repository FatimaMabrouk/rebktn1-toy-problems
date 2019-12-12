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



var deepEquals = function(obj1, obj2) {

	//initial variables
	var arrayFromObj1 = [];
	var arrayFromObj2 = [];

	//first check if args are objects
		//if not break
	if( Object.prototype.toString.call(obj1) !== '[object Object]' || Object.prototype.toString.call(obj2) !== '[object Object]' ) {
		return false;
	}

	//get an array from the values in each obj
	var get = function( obj, array ) {
		
	    for( var key in obj ) {
	        if( typeof(obj[key] ) !== "object" ) {
	        	array.push( obj[key] )
	        }else get( obj[key],array )
	    }
	};

	get( obj1, arrayFromObj1 );
	get( obj2, arrayFromObj2 );

	return arrayFromObj1.join('') === arrayFromObj2.join('');
};

// deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}})
// deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}})
