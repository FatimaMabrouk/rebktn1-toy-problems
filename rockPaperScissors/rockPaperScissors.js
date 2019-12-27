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
//
var rockPaperScissors = function (numberOfRounds)
 {
    var arr = [];
    var roundGame = Math.floor(Math.random() * 10)+ 1;

    for (var i = 0; i < roundGame; i++) {
        var sequence = '';
        
        for(var j = 0; j < numberOfRounds; j++){
         var result = Math.floor(Math.random() * 3);
         switch(result){
            case 0: sequence+='R'; break;
            case 1: sequence+='P'; break;
            case 2: sequence+='S'; break;
          }   
        }
        arr.push(sequence);
    }
    return arr
  };
