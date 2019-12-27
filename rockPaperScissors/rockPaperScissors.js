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

var rockPaperScissors = function (number) {
  // TODO: your solution here
  var rock ='R' ,resultArr =[]
  var obj ={0:'R' ,1:'P' ,2:'S'}
  var string = rock.repeat(number)
  var arr = string.split('')  
 

  var repeat = function(number){

  	for (var i = 0; i < arr.length; i++) {
  		for (var j = arr.length - 1; j >= 0; j--) {
  			arr.splice(j,1,obj[i%3])
  			resultArr.push(arr)
	 	 	console.log(arr)
  		}
  	} 
  	if(number = 0){
  		return resultArr
  	} 
  }


return repeat(number-1)
};
