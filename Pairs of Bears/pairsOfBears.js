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

function pairsOfBears(num, string) {
	var finalStr = "";
	var len = string.length;
	var i = 0;

	while(i < len -1) {
		if(string[i] === "B") {
			if(string[i+1] === "8") {
				finalStr += "B8";
				i ++;
			}
		}
		if(string[i] === "8") {
			if(string[i+1] === "B") {
				finalStr += "8B";
				i ++
			}
		}
		i++
	}

	var bool = finalStr.length/2 >= num;

	return [finalStr, bool]; 
}

// An attempt with regular exp

function bearsPairs(num, string) {
	var str = "";

	var ndx1 = string.search(/B8/);
	var ndx2 = string.search(/8B/);

	if(!string.includes("8B") && !string.includes("B8")) {
		return [str, str.length/2 >= num]
	}

	if(ndx1<ndx2) {
		str += string.slice(string[ndx1], string[ndx1]+2)
		return bearsPairs[num, string.slice(ndx1)]
	} else if (ndx1>ndx2) {
		str += string.slice(string[ndx2], string[ndx2]+2)
		return bearsPairs[num, string.slice(ndx2)]
	}
	
	

	
}