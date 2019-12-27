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
* 	; // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function (rounds) {
	var choices = ['R', 'P', 'S']
	var output = []

  if(!rounds || rounds < 0) {
  	return 'Choose the number of rounds in the game'
  } else {
	  	while(rounds !== 0) {
	  		for(var i = 0 ; i < choices.length; i++) {
	  			for(var j = 0 ; j < choices.length; j++) {
	  				for(var k = 0 ; k < choices.length; k++) {
	  					var middleArray = []
	  					middleArray.push(choices[i],choices[j],choices[k])
	  					output.push(middleArray)
	  				}  			
	  			}
	  		}
	  		rounds --
	  	}
  } 
  return output;
};
