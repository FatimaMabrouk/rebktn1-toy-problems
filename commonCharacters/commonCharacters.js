/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('aacexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, string2) {
  var result = [];
  for(i = 0; i < string1.length; i++){
    if(string2.includes(string1[i]) && !result.includes(string1[i])) {
      result.push(string1[i]);
    }
  }
  return result.join('');
}

///commonCharacters2 this is for using more than 2 args but it doesnt work
var commonCharacters2 = function(...rest) {
  var result = [];
  while(rest.length > 0){
    if(!!rest[1]){
      result.push(commonCharacters(rest[0], result.join('')));
      rest.splice(0, 1);
    } else {
      result.push(commonCharacters(rest[0], rest[1]));
    rest.splice(0, 1);
    }
    
  }
  return result.join('');
}