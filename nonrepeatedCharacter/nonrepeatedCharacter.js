/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {

    var array = [];
    var array1 = string.split('')
    

    for ( var i = 0 ; i < array1.length ; i++) {

        for ( var j =i; j < array1.length ; j++ ) {

            if (array1[i] !== array1[j]) {

                array1.splice(i,1)

            }
        }
    }

return array1[0]
};