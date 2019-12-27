/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/
//for this i want to implement a tree
//first i choose the first letter
//then i add all the possibilities recursevlly
//and return the result at the end
var rockPaperScissors = function (n) {
    // TODO: your solution here
    let result = [];
    let nbrOfCombinations = Math.pow(3, n);
    let letters = ["R", "P", "S"];
    function innerFunction(str) {
        str = str || [];
        if (str.length === n) {
            result.push(str.join(''));
            return
        }
        for (var i = 0; i < 3; i++) {
            str.push(letters[i]);
            innerFunction(str)
            str.pop()
        }
    }
    innerFunction("")
    return result
};
