/*
* Write a function that generates every {sequence of throws} a single
* player could throw over a {three-round} game of rock-paper-scissors.
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




	//||=====Logic=====||\\
			/*
	Round = 3 & choices = 3

		R: 3 * 3
		P: 3 * 3
		S: 3 * 3

	Math.pow() to return the base to the exponent power
				*/

//==========Solution==========\\
//============================\\
var rockPaperScissors = function (rounds) {

	//checks for number of rounds
		//if no rounds return null
	console.log(rounds);
	if( !rounds ) return null;
	//limit is Math.pow(3, rounds) ===> 3-rounds gives a limit of 27
	var limit = Math.pow(3, rounds)
	var container = {};
	var choices = ["R", "P", "C"];
	// const arrayOfR = ["R", "R", "R"];
	// const arrayOfP = ["P", "P", "P"];
	// const arrayOfS = ["S", "S", "S"];

	//while limit not reached
	while( Object.keys(container) !== limit ) {
	    var  sequence= "";
	    for (var i = 0; i < rounds; i++) {
	    	//"choices[0]" ==> R
	      console.log(choices[ Math.floor(Math.random() * 3) ]);
	      sequence += choices[ Math.floor(Math.random() * 3) ];
	      console.log(sequence);
	    }
	    //"R" + "P" + "R" randomly generated
	    container[sequence] = sequence;
	    console.log(container);
	  }

	  // ["RRP"],["RPR"],...
	  return Object.keys( container ).sort( function (a, b) {
	  	//to check if elemnt1 === "R"
	    var element1;
	    var element2;
	    var index = 0;
	    while (a && a[index] === b[index]) { // ["RRP"],["RPR"]
	      // element1 = a[index];
	      // element2 = b[index];
	      // index++; probalby needs to be incremented before the assignment
	    }
	    // if (...) {
	    //   return -1;
	    // } else if (...) {
	    //   return 1;
	    // } else {
	    //   return 0;
	    // }
	  } );

}
