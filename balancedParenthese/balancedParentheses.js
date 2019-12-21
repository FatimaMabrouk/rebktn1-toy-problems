/*
Balanced Parenthesis
Given a string, return true if it contains balanced parentheses ().

isBalanced("(x + y) - (4)")	// true
isBalanced("(((10 ) ()) ((?)(:)))")	// true
isBalanced("(50)(")	// false
isBalanced("") //	true
*/

//-------------
//---First Solution Only checks for pairs---
//-------------

var isBalanced = function(str) {
	var regex1 = /[(]/g;
	var regex2 = /[)]/g;
	var open = str.match(regex1);
	var close = str.match(regex2);
	if ( ( ( open.length + 1 ) % 2 === 1 ) && ( ( close.length + 1 ) % 2 === 1) ) {
		return true;
	}else{
		return false;
	} 
}

//-------------
//---Second Solution
//-------------

var isBalanced = function(str) {
 
  var grabber = [];
  var pairs = {')':'('};

  for ( var i = 0; i < string.length; i++ ) {
    if ( ['('].indexOf(string[i] ) !== -1 ) {
      grabber.push( string[i] );
    } else if ( pairs[string[i]] ) {
      if ( grabber[grabber.length - 1] === pairs[string[i]]) {
        grabber = grabber.slice(0,grabber.length-1);
      } else {
        return false;
      }
    }
  }

return grabber.join('') === '';
}
