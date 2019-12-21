/*
Character Frequency
Write a function call characterFrequency that takes as its input a string and returns an array
of arrays as shown below sorted in descending order by frequency
and then by ascending order by character.
characterFrequency("aaabbc") -->    [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
characterFrequency("mississippi")  -->  [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
characterFrequency("") -->  [ ]
*/

var characterFrequency = function(string){
	//the bigger array to hold all arrays
	var masterArray =[]
	// something to tell us what charc we worked on now to avoid working on the same
	var workedOnChars = []
	// flag to tell us we need to move to the next charc
	var flag = false;
	for (var i = 0; i < string.length; i++) {
		flag = false;
		//we loop on worked on chars to see if we already have that if so we break
		for (var x = 0; x < workedOnChars.length; x++) {
			if(string[i] === workedOnChars[x])
				flag = true;
		}
		//set the counter for how many times we found this char
		var freqCounter = 0;
		//check if our flag is flase to keep counting and pushing
		if(!flag){
		for (var j = 0; j < string.length; j++) {
			if(string[i] === string[j])
				freqCounter++;
		}
		masterArray.push(string[i])
		masterArray.push([freqCounter])
		workedOnChars.push(string[i])
	}
	}
	//here we should format and sort and honstly i don't know how to do it. 
	return masterArray;

}