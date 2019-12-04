/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  var stringFifo = {};

  for(var i = 0; i < string.length; i++){
    if(stringFifo[string[i]] !== undefined){
      stringFifo[string[i]] = stringFifo[string[i]] + 1;
    } else if(stringFifo[string[i]] === undefined){
      stringFifo[string[i]] = 0;
    }
  }
  var res = [];
  for(var key in stringFifo){
    if(!stringFifo[key]){
      res.push(key);
    }
  }
  return res[0]
};
