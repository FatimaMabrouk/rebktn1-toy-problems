/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */
 var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  var result;
	
 	var array = Array.from(string);
	for( var i = 0; i < array.length; i++ ) {
		var count = 0;
		return array.forEach(function(element, index) {
		    console.log(count)
			console.log(element)
		if (element === array[i]) {
			console.log('hi')
			count+=1;
			console.log(count)	
			if (count < 2) {
				console.log('hi again');
				result = array[i]
				console.log(array[i])
			}
		}
		});
		return result;
    }
}