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

var rockPaperScissors = function (rounds) {
	let letters = ['R','P','S'];
	let result = [];


	let getResult = (played,roundsToGo)=>{
		for (let i = 0; i < 3 ; i++) {

  		console.log(letters[i],letters[j],letters[x])

  	}
	
	}

  
};


var rockPaperScissors = function () {
	let letters = ['R','P','S'];
	result = [];

  for (let i = 0; i < 3 ; i++) {
  	for (let j = 0; j < 3 ; j++) {
  		for (let x = 0; x < 3 ; x++) {
  			result.push( `${letters[i]}${letters[j]}${letters[x]}`);
 	 }
  }
  }
	return result;
};
