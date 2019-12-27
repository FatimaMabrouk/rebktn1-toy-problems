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

var rockPaperScissors = function (n) {
    var result = [];
    var iterator = "";

    for (var i = 0; i < n; i++) {
        iterator += "R";
    }
    for (var i = iterator.length; i > 0; i--) {
        var str = iterator;
        for (var j = 0; j < 3; j++) {
            if (i === str.length) {
                result.push(str);
            }
            if (str[i] === "R") {
                str[i] = "P";
                result.push(str);

            }

            if (str[i] === "P") {
                str[i] = "S";
                result.push(str);
            }
        }
    }
    return result;
}
