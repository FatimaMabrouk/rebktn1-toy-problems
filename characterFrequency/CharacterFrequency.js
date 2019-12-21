/*
Character Frequency
Write a function call characterFrequency that takes as its input a string and returns an array
of arrays as shown below sorted in descending order by frequency
and then by ascending order by character.


characterFrequency("aaabbc") -->    [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

characterFrequency("mississippi")  -->  [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

characterFrequency("") -->  [ ]
*/

var characterFrequency=function(string){
	
	var objOfChar={};
	for (var i = 0; i < string.length; i++) {
		if(objOfChar[string[i]] === undefined){
			objOfChar[string[i]]=1;
		}else{
			objOfChar[string[i]]=objOfChar[string[i]]+1;

		}
	}

return Object.entries(objOfChar).sort((a,b)=>b[1]-a[1])

	 
}


