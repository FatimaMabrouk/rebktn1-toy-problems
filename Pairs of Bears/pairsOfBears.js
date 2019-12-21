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

function pairsOfbears(expectation, zooAnimals) {
	var count = 0;
	var result = '';

	for (var i = 0; i < zooAnimals.length -1; i++) {
		if( zooAnimals[i] + zooAnimals[i+1] === "B8" || zooAnimals[i] + zooAnimals[i+1] === "8B") {
			result += zooAnimals[i] + zooAnimals[i+1];
			count++;
		}
	}
	if (count >= expectation) {
		return [result, true]
	}
	return [result, false]

}

function pairsOfbears(expectation, zooAnimals) {
	var count = 0;
	var result = '';
	var counter = '';
	for (var i = 0; i < zooAnimals.length -1; i++) {
		if(counter === '' && zooAnimals[i] === "B" || counter === '' && zooAnimals[i] === "8") {
			counter += zooAnimals[i]
			
		}
		if (counter === 'B' && zooAnimals[i] === '8') { counter += zooAnimals[i] }
		if (counter === '8' && zooAnimals[i] === 'B') { counter += zooAnimals[i] }

		if ( counter === 'B8' ||counter === '8B') {
			result += counter;
			counter = '';
			count++;
		}
	}
	if (count >= expectation) {
		return [result, true]
	}
	return [result, false]

}