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
  let res = [];
  let arr = ['R', 'P', 'S'];
  let random = [];

  for (let i = 0; i < 4; i++) {
  	random.push( arr[Math.floor(Math.random() * arr.length)] );
  }

  while (res.length < n) {
  	res.push(random.join(''))
  }
  return res
};
