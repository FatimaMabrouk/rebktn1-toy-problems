/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
    var strArr = Array.from(string);
    var count = 0;
    var res = '';
    var mapped = [];

    for (var j = 0; j < strArr.length; j++) {
        var c = 0;
        for (var i = 0; i < strArr.length; i++) {
            if (strArr[i] === strArr[j]) {
                c++;
            }
        }
        mapped.push({
            char: strArr[j],
            count: c
        });
    }

    res = mapped.filter(function(elem, index) {
        if (elem.count === 1) {
            return elem;
        }
    })

    return res[0].char
};