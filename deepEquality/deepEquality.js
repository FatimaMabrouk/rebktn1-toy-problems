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
	var app = [];
	app.push(Object.entries(apple).toString());

	var oran = [];
	oran.push(Object.entries(orange).toString());

	var appString = app.toString();
	var oranString = oran.toString();

	return appString === oranString;
	// return Object.entries(apple).toString() === Object.entries(test).toString() ? true : false
};
