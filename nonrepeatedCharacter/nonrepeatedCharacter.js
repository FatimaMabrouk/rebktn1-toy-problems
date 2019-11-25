/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
	str = '';
   var counter = [];
   for (var i = 0; i < string.length; i++){
   	     counter.push(1);
   }
   var arr = string.split('')
   for (var j = 0;  j < string.length; j++){
   	   str = str + counter[arr.indexOf(string[j])]++
       if(str === 1){
       	 str = string[j]
       }

       return str; ;
   //    var str = '';
   //    var arr = string.split('');
   //    var counter = 0;
   // for(var i= 0; i < arr.length; i++)
   	

   //    if(counter === 1){
   //    	return arr[i]
   //    }
   //    return str + firstNonRepeatedCharacter(string, counter - 1 )
};
