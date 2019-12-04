
//     A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
//     Within that sequence, he chooses two numbers, a and b.
//     He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
//     Given a number n, could you tell me the numbers he excluded from the sequence?

// The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]

// with all (a, b) which are the possible removed numbers in the sequence 1 to n.

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ...will be sorted in increasing order of the "a".

// It happens that there are several possible (a, b). The function returns an empty array (or an empty string) if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil).
//
//
// Example:
// removNb(26) should return [ {15, 21}, {21, 15} ]


// I tried but i dont get the idea of Q , for me if it was more clear maybe i can do something :}
// 

var removNb = function(n) {

  var array = []; 
  var multi = 0 ;
  var sum = 0 ; 

  if ( n <= 0 ) {
    return [];
  }

  var x = Math.floor(Math.random() * n) + 1
  var y = Math.floor(Math.random() * n) + 1

  multi = x * y ;

  if ( x !== y ) {

    array.push([x,y])

  }
  for ( var i = 0 ; i < n ; i++) {

    if ( i !== x &&i !== y ) {

      array.push(i)
    }
  }
 
for (var i = 1 ; i < array.length ;i++) {

   sum = sum + array[i] ;
}

console.log(multi , "###" ,sum)

if (multi === sum ) {

  return array[0]

  }else{

    return []
}


}
