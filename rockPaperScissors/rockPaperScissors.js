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
  // TODO: your solution here
  var result = []
  return randomly = function(){
  var str=""
  var RPS = ["R","P","S"]
  for(var i = 0 ; i<n ; i++){
      str += RPS[Math.floor(Math.random() * 3)]
  }
  result.push(str)
  return result
    }
    
};
