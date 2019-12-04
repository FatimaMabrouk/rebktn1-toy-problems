/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
 var storage = {}
 var firstNonRepeat = 0
  var arr = []
  for (var i = 0; i < string.length; i++) {
    var char = string[i]
    console.log('this char', char)
    if (!storage[char]) {
      console.log('this gets into the statement', char)
      storage[char] = true
      arr.push(char)
      console.log('this arr', arr)
    } else {
      if (arr[firstNonRepeat] === char) {
      console.log('this gets into the  statement', char)
      console.log(' the storage', storage)
      firstNonRepeat += 1
      console.log('firstNonrepeat', firstNonRepeat)
      }
    }
  }
  return arr[firstNonRepeat];
}  

firstNonRepeatedCharacter('AACBDB')