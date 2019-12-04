/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  //put all charcters in an array
  var arrayOfCharc =[];
  var repeatedString = [];
  for (var i = 0; i < string.length; i++) {
  arrayOfCharc.push(string[i]);

  }
  //take each string and count how many times it appears in the array,
  //if it appears more than once push it to repeated array.
  
  for (var i = 0; i < string.length; i++) {
  	var counter = 0;
  	for (var j = 0; j < arrayOfCharc.length; j++) {
  		if(string[i] === arrayOfCharc[j])
  	counter++;
  	if(counter === 1){
  		repeatedString.push[string[i]];
  	}
  
  }
  }
  console.log(arrayOfCharc);
  //chech if a string exist in the repeated array, IF NOT return it
  for (var r = 0; r < string.length; r++) {
  	var secondCounter = 0;
  	for (var m = 0; m < repeatedString.length; m++) {
  		if(string[r] === repeatedString[m]){
  			secondCounter++;
  		}
  	}
  	if(secondCounter === 0)
  		return string[r];
  }
 // return arrayOfCharc;
};
