/*
Character Frequency
Write a function call characterFrequency that takes as its input a string and returns an array
of arrays as shown below sorted in descending order by frequency
and then by ascending order by character.


characterFrequency("aaabbc") -->    [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

characterFrequency("mississippi")  -->  [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

characterFrequency("") -->  [ ]
*/

// function characterFrequency(str){
//     var arr = [];
//     var newArr = [];

// 	for (var i = 0; i < str.length; i++) {
// 		var count = 0;

// 		for (var j = 0; j < str.length; j++) {

// 			   if(str[i] === str[j]){
//                count++;
  
// 			}
// 		}
		
// 		arr.push([str[i],count])
// 	}
// 		var temp = 0;
//     for (var i = 0; i < arr.length; i++) {
        
//         for (var j = i+1; j < arr.length; j++) {

//     		if(arr[i][1] < arr[j][1]){
//                temp = arr[i][1];
//                arr[i][1] = arr[j][1];
//                arr[j][1] = temp;
//     		}
        	
//         }
//     }

// 	return arr;
// }
function characterFrequency(str){
	var obj = {};
	var arr = [];
	for (var i = 0; i < str.length; i++) {
		if(obj[str[i]]){
			obj[str[i]]++;
		}
		else{
            obj[str[i]] = 1;
		}
	}
	for(var key in obj){
       arr.push([key , obj[key]]);
	}

	arr.sort(function(a,b){
		b[1] - a[1]
	})
	return arr
}