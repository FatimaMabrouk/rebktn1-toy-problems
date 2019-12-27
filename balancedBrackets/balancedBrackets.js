/*
Balanced Brackets
Given a string, return true if its arrangement of parenthesis (), curly-brackets {}, and square-brackets [] would be considered valid in code and mathematics (is balanced).

isBalanced("(x + y) - (4)") // true
isBalanced("(((10 ) ()) ((?)(:)))") // true
isBalanced("[{()}]") // true
isBalanced("(50)(") // false
isBalanced("[{]}") // false
*/

var isBalanced = function(str) {
  var result2 = 0;
  var result3 = null;

  for(var i = 0 ; i < str.length; i++) {
    if(str[i] === '{' || str[i] === '(' || str[i] === '[') {
      result1 = false;
      result2 = 1;
      if(result3 === null) {
        result3 = str[i];
      }

    }
    if(str[i] === '}' || str[i] === ')' || str[i] === ']') {
      result1 = true;
      result2 = 0;
      if(result3 === '{' && str[i] === '}') {
          result3 = null;

      } else {
        result3 = false;
      }

      if(result3 === '[' && str[i] === ']') {
          result3 = null;

      } else {
        result3 = false;
      }

      if(result3 === '(' && str[i] === ')') {
          result3 = null;

      } else {
        result3 = false;
      }
    }
  }

  return result2 === 0 || result3 === null;
};
