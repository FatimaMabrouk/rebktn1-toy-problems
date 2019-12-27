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
  var arr=['R','S','P']
  result=[]

  for (var i = 0; i < 3; i++) {

  	for (var j = 0; j < 3; j++) {

  		for (var k = 0; k < 3; k++) {
  				result.push(arr[i]+arr[j]+arr[k])
  	
  }
    }
        }


        return result

};


var rockPaperScissors = function (n) {

  var arr=['R','S','P']
  result=[]

  function nest (el='',nb = n){
 	nb--
 	for (var i = 0; i < 3; i++) {
 		el = el + arr[i]
 		if(nb ===1) {

 		 result.push(el)
 			
 		}else{
 		nest(arr[i],el,nb)}
 	}
 	
 }
nest()
        return result

};