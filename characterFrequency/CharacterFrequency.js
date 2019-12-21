/*
Character Frequency
Write a function call characterFrequency that takes as its input a string and returns an array
of arrays as shown below sorted in descending order by frequency
and then by ascending order by character.


characterFrequency("aaabbc") -->    [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

characterFrequency("mississippi")  -->  [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

characterFrequency("") -->  [ ]
*/
function letterFrequency(str){
  var obj = {};
  str = str.toLowerCase();
  for(var i = 0; i < str.length; i++){
  	if(/\W/.test(str[i])){
  		continue;
  	}
  	if(/[0-9]/.test(str[i]) || str[i] === '_'){
  		continue;
  	}

     if(obj[str[i]] === undefined){
     obj[str[i]] = 1;
     } 
     else {
     	obj[str[i]]++
     }
  }
   
  return Object.entries(obj).sort(function(a, b){
  	if(b[1] === a[1]){
  		return a[0].charCodeAt(0) - b[0].charCodeAt(0)
  	}
  	    return b[1] - a[1] 
  });
   
   	
   }

   