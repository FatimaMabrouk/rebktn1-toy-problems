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
var left = 0
var right =0
for(var i =0; i< str.length;i++){
    switch(str.charAt(i)) {
  case  '[':
    left++
    break;
    case  ']':
    right++
    break;
     case  '(':
    left++
    break;
     case  ')':
    right++
    break;
      case  '{':
    left++
    break;
      case  '}':
    right++
    break;
  case null:
    // code block
    break;
  default:
    // code block
}
}
return left === right
};

