/*
Balanced Brackets
Given a string, return true if its arrangement of parenthesis (), curly-brackets {}, and square-brackets [] would be considered valid in code and mathematics (is balanced).

isBalanced("(x + y) - (4)") // true
isBalanced("(((10 ) ()) ((?)(:)))") // true
isBalanced("[{()}]") // true
isBalanced("(50)(") // false
isBalanced("[{]}") // false
*/

function isBalanced (str) {
  var result = []; 
  var ending = [')',']','}'];
  var pairs = { '(': ')',
   '[': ']',
    '{': '}' 
	};
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    console.log('hi')
    if ( pairs.hasOwnProperty(char) ) {
      result.push(pairs[char]);
    } else if ( ending.indexOf(char) !== -1 ) {
      if (result.pop() === char) {
      	console.log(result);
  // continues execution of the loop with the next iteration.
        continue;
      } else {
        return false;
      }
    }
  }
  console.log(result);
  return result.length === 0;
};


