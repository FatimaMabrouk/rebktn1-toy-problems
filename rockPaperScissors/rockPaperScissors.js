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

var rockPaperScissors = function (
) {
  // TODO: your solution here
  var choices = 'RPS';
  var string = '';
  var result = [];
  
  for (var i = 0; i < 3*3; i++) {
  	for (var j = 0; j < 3; j++) {
  		for (var k = j; k < 3; k++) {
  			string += choices[j];
  		}
  	}
  	result.push(string);
  	string = '';
  }
  return result;
};

rockPaperScissors();