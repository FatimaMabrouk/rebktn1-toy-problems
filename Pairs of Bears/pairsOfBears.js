/*

In order to prove it's success and gain funding, the wilderness zoo needs to prove to environmentalists that it has x number of mating pairs of bears.

You must check within string (s) to fid all of the mating pairs, and return a string containing only them. Line them up for inspection.

Rules: Bears are either 'B' (male) or '8' (female), Bears must be together in male/female pairs 'B8' or '8B', Mating pairs must involve two distinct bears each ('B8B' may look fun, but does not count as two pairs).

Return an array containing a string of only the mating pairs available. e.g:

'EvHB8KN8ik8BiyxfeyKBmiCMj' ---> 'B88B' (empty string if there are no pairs)

and true if the number is more than or equal to x, false if not:

(6, 'EvHB8KN8ik8BiyxfeyKBmiCMj') ---> ['B88B', false];

x will always be a positive integer, and s will never be empty 

- regular expression is not allow 
//first we need to loop through our string and push all the b's and 8s to an array  and than we need to match every 8 and b to have pairs and get rid of the solo if exists and than check if the length of the array is 
//smaller than the nbr given in the parameter return false else we return true push the pairs joined as a string and the truth condition to an array and return it .

*/
function pairs(string, nbr) {
	var array = []; 

	for (var i = 0; i < string.length; i++){
		// if (string.inculdes('B') && string.inculdes('8')){
			if (string[i] === 'B'){
				array.push(string[i])
			}
			if (string[i] === '8'){
				array.push(string[i])
			}
		}
	// }
	array.join('') ;
	if(array[0].length * 2 < nbr){
		 array.push('false')
	}else{
		array.push('true')
	}
		return array ; 

}