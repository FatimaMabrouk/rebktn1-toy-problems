/*
Balanced Brackets
Given a string, return true if its arrangement of parenthesis (), curly-brackets {}, and square-brackets [] would be considered valid in code and mathematics (is balanced).

isBalanced("(x + y) - (4)") // true
isBalanced("(((10 ) ()) ((?)(:)))") // true
isBalanced("[{()}]") // true
isBalanced("(50)(") // false
isBalanced("[{]}") // false
*/

var isBalanced = function (str) {
    let types = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    let myBrackets = [];

    for (let ch of str) {
        if (types[ch]) {
            myBrackets.push(types[ch]);
        }
        if (ch === myBrackets[myBrackets.length - 1]) {
            myBrackets.pop();
        }
    }
    return myBrackets.length === 0;
};