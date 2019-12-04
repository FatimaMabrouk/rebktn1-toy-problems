
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

//this might take a lot of time .. but we need to itterate over all the numbers and try to multiply evrey number by all numbers and if it checks the conditions which is equal to sum without those two numbers w return it .. in case there's no case fitting the conditions we just return nothing 

function removeNb (n) {
  var sum = 0 ;
  	for ( i = 1; i <= n; i++){
    	sum = sum + i ;
 }
 		 for(i = 1; i <= n; i++){
     for(j = i + 1; j <= n; j++){
      if(i * j  === sum - ( i + j)){
        
        return [Object.values({i, j}), Object.values({j, i})]
      }
   }
 }
 		 return null;
}