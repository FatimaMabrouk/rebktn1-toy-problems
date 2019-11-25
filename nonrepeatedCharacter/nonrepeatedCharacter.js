/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  obj = {}
  var arr = []
  var count = 0
  for (var i = 0; i < string.length; i++) {
    var test = string[i]
    if (!obj[test]) {
      obj[test] = true
      arr.push(test)
    } else {
      if (arr[count] === test) {
      count += 1
      }
    }

  }
  return arr[count]
}


