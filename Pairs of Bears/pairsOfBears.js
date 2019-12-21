/*

In order to prove it's success and gain funding, the wilderness zoo needs to prove to environmentalists that it has x number of mating pairs of bears.

You must check within string (s) to find all of the mating pairs, and return a string containing only them. Line them up for inspection.

Rules: Bears are either 'B' (male) or '8' (female), Bears must be together in male/female pairs 'B8' or '8B', Mating pairs must involve two distinct bears
 each ('B8B' may look fun, but does not count as two pairs).

Return an array containing a string of only the mating pairs available. e.g:

'EvHB8KN8ik8BiyxfeyKBmiCMj' ---> 'B88B' (empty string if there are no pairs)

and true if the number is more than or equal to x, false if not:

(6, 'EvHB8KN8ik8BiyxfeyKBmiCMj') ---> ['B88B', false];

x will always be a positive integer, and s will never be empty

- regular expression is not allowed

*/

function pairsOfBears(str, x) {
	var array = [];
	var arrayResult = [];
	var st = '';
	var str = str.split('');
	var b = 0;
	var eight = 0;
	var bool = false;

	var filtered = str.filter((char)=> {
		return char === '8' || char === 'B';
	})

	for(var i = 0; i < filtered.length; i++) {
		if (filtered[i] === 'B') {
			b++;
		} else if (filtered[i] === '8') {
			eight++;
		}
	}

	if (b === eight) {
		array.push(filtered);
	} else {
		return ' ';
	}

	if(array.length / 2 === x) {
		bool = true;
	}

	array = array.join('');
	arrayResult.push(array, bool)

	return arrayResult
}