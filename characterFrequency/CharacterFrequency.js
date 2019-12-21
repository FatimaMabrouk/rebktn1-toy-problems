/*
Character Frequency
Write a function call characterFrequency that takes as its input a string and returns an array
of arrays as shown below sorted in descending order by frequency
and then by ascending order by character.


characterFrequency("aaabbc") -->    [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

characterFrequency("mississippi")  -->  [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

characterFrequency("") -->  [ ]


*/

//SOLVED 
//BUT IT DOES NOT RETURN IT IN A DESCENDING ORDER 
var characterFrequency = function(string) {
 
arr = [];
result = [];
result2 = [];
  for (var i = 0; i < string.length; i++) {
  	if (arr[string.charCodeAt(i)-65] == undefined){

       arr[string.charCodeAt(i)-65] = 1;
       result[ string.charCodeAt(i)-65 ] = [ string[i] , arr[string.charCodeAt(i)-65] ];

  	}else{
  		 arr[string.charCodeAt(i)-65]++;
  		 result[string.charCodeAt(i)-65] = [string[i],arr[string.charCodeAt(i)-65]];
  	}
}


for (var i = 0; i < result.length; i++) {
	if(result[i]){
		result2.push(result[i]);
	}
}

return result2;

}
//SOLVED 
//BUT IT DOES NOT RETURN IT IN A DESCENDING ORDER 
