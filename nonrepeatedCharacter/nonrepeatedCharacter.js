/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  var arry=[]
  var  temp =string[0]
  for(var i =0 ; i< string.length;i++){
    temp=string[i]

    if (string.slice(i+1).indexOf(temp)===-1 && arry.indexOf(temp)===-1){
       return  temp
    }else{
    arry.push(temp)
    }

  }
 
};
