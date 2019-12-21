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
  var counter = 0;
  var counter2 = 0;
  var appl = apple.keys();
  var ornge = orange.keys();

  if(appl.length > ornge.length || appl.length < ornge.length) return false;

  for(let i = 0; i < appl.length; i++) {
    if(appl[i] === ornge[i] || apple[appl[i]] === orange[ornge[i]]){ counter++ }

    if( typeof apple[appl[i]] === "object" && typeof orange[ornge[i]] === "object" && !Array.isArray(orange[ornge[i]]) && !Array.isArray(apple[appl[i]]) ) { 
      var appleKeys = apple[appl[i]].keys();
      var orangeKeys = orange[ornge[i]].keys()

      for(let j = 0; j < appleKeys.length; j++) {
        if( appleKeys[j] === orangeKeys[j] && apple[appl[i]][appleKeys[j]] === orange[ornge[i][orangeKeys[j]] ) {
          counter2++;
        }

        if( !appleKeys[j+1] && !orangeKeys[j+1] && counter2 === appleKeys.length) {
          counter++;
          counter2 = 0
        }
      }
    }
  }

  return counter === appl.length
};
