/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */


  // the idea .. switching the every 2 letters couple of times, then switching the middle twice
  //repeat this for 100 times
  // after that write a filter to remove repeated results
  /**
 assuming we have this string : abcd
flip 2
bacd
badc
abdc

flip middle
cbda
cdba
flip 2
dcba
dcab
cdab
cdba X remove
flip middle
bdac
badc x remove
flip 2
dbac
dbca  // end here as we have all possilbe answers
   */
  var allAnagrams = function(string) {

    var array =[]
    for(var j =0; j<100;j++){
    //swap every 2 letters
     var result = ""
     //flip 2
      for(var i =0;i < string.length;i++){
           result = result + (string[i+1] + (string[i]))
           // add the rest of the string
           restOfStringToArray = string.split('').splice(i+2,string.length)
           restOfStringToArray.forEach((str) => {result = result + str })
           string = result
           console.log(result)
           break;
       }
      // flip middle

      // filter
    }
   };

      var anagrams = allAnagrams('abc');
     // console.log(anagrams);