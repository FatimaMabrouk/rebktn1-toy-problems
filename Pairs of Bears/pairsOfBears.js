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


*/

var pairsBears = function(nb, str) {
	var count = 0;
	var result = '';
	var array = str.split('')
	if(str.indexOf('B8B') >= 0 && str.indexOf('B8B') !== str.indexOf('B8B8')) {
		if(array.splice(str.indexOf('B8B')-1, 4) !== '8B8B') {

		console.log()
			array.splice(str.indexOf('B8B'), 3)	
		}
		
	}
	
	for(var i = 0; i < array.length; i++) {
		if(array[i] + array[i + 1] === 'B8' || array[i] + array[i + 1] === '8B' ) {
			count +=1;
			result += array[i] + array[i + 1];
		}
	}
	if(nb) {
		return [nb <= count, result]
	}
	return [count, result]
}