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
    var possibilities = [];
   // var result = [];
    var player = ['R', 'P', 'S'];
    for(var r = 0; r < player.length; r++) {
      for(var s = 0; s < player.length; s++) {
          for(var p = 0; p < player.length; p++) {
            var tab = []
            tab.push(player[r], player[s], player[p]);
            tab.join('');
  //console.log(tab.join(''));
            possibilities.push(tab);
  //result.push(possibilities);
          }
      }
    }
    return possibilities; //['RRR', 'RRP', 'RRS', etc...]
  };


// var rockPaperScissors = function (nbOfRound,
//   ) {
//     // TODO: your solution here
//     var possibilities = [];
//     var player = ['R', 'P', 'S'];
//     var count = 0;
//     for(var r = 0; r < player.length; r++) {
//       count++
//       possibilities.push(player[r])
//       if(nbOfRound === count) {
//         return true;
//       }
//     }
//   };