/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */
clear()

var commonCharacters = function(string1, string2) {
    let str1Chars = Array.from(new Set(string1));
    let str2Chars = Array.from(new Set(string2));

    return str1Chars.map((char,index)=>{
        for (var i = 0; i < str2Chars.length; i++) {
            if (char === str2Chars[i] && char != ' ') {
                return str2Chars[i];
            }
        }
    }
    ).join('');
};

// console.log(commonCharacters('aczxizvz ou', 'aegi hobuzz'));
