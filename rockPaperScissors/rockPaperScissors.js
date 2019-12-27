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

var rockPaperScissors = function () {
    // TODO: your solution here
    var arr = ['R', 'P', 'S']
    var results = []
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            for (var k = 0; k < arr.length; k++) {
                results.push(arr[i] + arr[j] + arr[k])
            }
        }
    }
    return results

}

