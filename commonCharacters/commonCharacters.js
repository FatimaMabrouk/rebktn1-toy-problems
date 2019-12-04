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

  var commn = [];
  var obj = {} ; 


  for ( var i = 0 ; i < string1.length ; i++) {
   

    for ( var j =0 ; j < string2.length ; j++) {

      if ( string1[i] === string2[j] ) {

        obj[string1[i]] = 0

        commn.push(string1[i])

      }
    }
  }

  for ( var i = 0 ; i < commn.length ; i++) {

    if (commn[i] === commn[i+1]) {
        obj[commn[i]] = obj[commn[i]] +1 
    }
  }

  var x = Object.keys(obj)
 
   for ( i = 0 ; i < x.length ; i++ ) 
   {

    if (x[i] === " "){

        x.splice(i,1)
    }

   }  
  
  return x.join("")
};

