/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  // i will split the string, then for each character get the number of repeatitions
  // represented on key/value like A:3 which mean that A repeated 3 times.
  // than for all values equal to 1 return the minimum index of them.
 
  var strChar = string.split();
  var strNumChar = [];
  var nbRepeatChar = 1;
  var obj={};
  var arrIndex = [];
  var arrNon = [];
  	for (var i = 0; i < strChar.length; i++) {
  	 	for (var j = 1; i < strChar.length; j++) {
  	 		if(strChar[i] === strChar[j]){

  	 			nbRepeatChar ++;
  	 			obj.strChar[i].value = nbRepeatChar;
  	 			arrIndex.push(obj.strChar[i])


  	 		}
  	 	}
  	 } 
 for (var i = 0; i < arrIndex.length; i++) {
 	if(arrIndex[i].value === 1){
 		arrNon.push(arrIndex[i]);
 	}
 }
 return arrNon[0];
};
