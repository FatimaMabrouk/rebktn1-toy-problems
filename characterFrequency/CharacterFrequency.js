/*
Character Frequency
Write a function call characterFrequency that takes as its input a string and returns an array
of arrays as shown below sorted in descending order by frequency
and then by ascending order by character.


characterFrequency("aaabbc") -->    [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

characterFrequency("mississippi")  -->  [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

characterFrequency("") -->  [ ]
*/

function characterFrequency(string) {
	var arr = []
	for (var i =0; i<string.length;i++) {
		var count = 0
		for(var j= 0;j<string.length; j++) {
			if(string[i]===string[j]) {
				count++
			}
		}
		if(!(arr.flat()).includes(string[i])) {
			arr.push([string[i],count])
	}
		
	}
	for (var i= 0;i<arr.length;i++) {
		for(j=0;j<arr.length;j++) {
			if(arr[i][1]>arr[j][1]){
				var tmp =arr[i]
				arr[i]=arr[j]
				arr[j]=tmp

		}
			}
	}
	
	return arr
}