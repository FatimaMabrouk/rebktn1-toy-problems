/*

In order to prove it's success and gain funding, the wilderness zoo needs to prove to environmentalists 
that it has x number of mating pairs of bears.

You must check within string (s) to fid all of the mating pairs, and return a string containing only 
them. Line them up for inspection.

Rules: Bears are either 'B' (male) or '8' (female), Bears must be together in male/female pairs 'B8' or '8B',
 Mating pairs must involve two distinct bears each ('B8B' may look fun, but does not count as two pairs).

Return an array containing a string of only the mating pairs available. e.g:

'EvHB8KN8ik8BiyxfeyKBmiCMj' ---> 'B88B' (empty string if there are no pairs)

and true if the number is more than or equal to x, false if not:

(6, 'EvHB8KN8ik8BiyxfeyKBmiCMj') ---> ['B88B', false];

x will always be a positive integer, and s will never be empty

- regular expression is not allow 


*/

function pairsOfBears(x, string) {
	var str = '';
	var tab = [];
	var count = 0;
	var result = false;
	//check if string[i] = B or 8
	//add to string
	//push string in array
	//count of number > x ? true 
	for(var i = 0; i < string.length; i++) {
		if((string[i] === "B" && string[i + 1] === "8") || (string[i] === "8" && string[i + 1] === "B")){
			str+=(string[i] + string[i + 1]);
			count++;
		}
	}
	tab.push(str);
	//console.log(tab);
	//console.log(count);
	//tab.push(str);

	count >= x ? result = true : result = false;
	tab.push(result);
	//console.log(tab);
	return tab;
}