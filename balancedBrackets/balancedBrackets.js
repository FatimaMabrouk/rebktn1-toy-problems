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
    let arr = [];

    let open = {
        '{': '}',
        '[': ']',
        '(': ')'
    };

    let closed = {
        '}': true,
        ']': true,
        ')': true
    };

    for (let i = 0; i < str.length; i++) {
        if (open[str[i]]) {
            arr.push(str[i]);
        } else if (closed[str[i]]) {
            if (open[arr.pop()] !== str[i]) return false;
        }
    }
    return arr.length === 0;
};
