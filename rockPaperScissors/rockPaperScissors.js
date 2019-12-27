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

var rockPaperScissors = function (num = 3) {
  // TODO: your solution here
  var finalArr = [];
  var rps = ["R","P","S"];

  while(finalArr.length < 3**num ) { // 3**num is the number of "arrangement avec remise" in french or "arrangement with repetition" in english
  	var str = "";
  	for(var i = 0; i < num; i++) {
  		str += rps[Math.floor(Math.random() * 3)];
  	}

  	if(!finalArr.includes(str)) {
  		finalArr.push(str)
  	}
  }

  return finalArr.sort();
};
