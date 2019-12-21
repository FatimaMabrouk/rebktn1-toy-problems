/*
Character Frequency
Write a function call characterFrequency that takes as its input a string and returns an array
of arrays as shown below sorted in descending order by frequency
and then by ascending order by character.


characterFrequency("aaabbc") -->    [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

characterFrequency("mississippi")  -->  [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

characterFrequency("") -->  [ ]
*/

//for string.length
//if obj.character exist => value = 1
//else value++
//=> return obj {a: 3, b: 2, c: 1}
//push character and value in array
//max = bigArray[0][1] 
//max < bigArray[i][1] ? max = bigArray[i][1] 

function characterFrequency(string) {
	var obj = {};
	var array = [];
	var bigArray = [];
	
	for(var i = 0; i < string.length; i++) {
		var character = string[i];
		
		if(!obj[character]){
			obj[character] = 1
		}
		else {
			obj[character]++;
		}
	}

	var arrayOffObject = Object.keys(obj);
	
	for(var i = 0; i < arrayOffObject.length; i++) {
	//	console.log("obj"+arrayOffObject)
		for(var key in obj){
			//console.log("key"+obj[key]);

			//return all keys with value 
			array.push(arrayOffObject[i], obj[key])
		}
	}
	bigArray.push(array);

	return bigArray;
}