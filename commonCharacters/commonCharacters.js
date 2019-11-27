/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, string2) {   
 var result =''
  var longest ='';
 var shortest='';
 if (string1.length <= string2.length){
   shortest= string1;
  longest=string2;
 }else{
  longest=string1;
  shortest=string2;
 }
  for (var i = 0 ; i <longest.length;i++){
    if(shortest.indexOf(longest[i])===-1){
      continue
    }else{
      result=result+longest[i]
    }

  }
  return result
};
