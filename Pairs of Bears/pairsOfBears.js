/*

In order to prove it's success and gain funding, the wilderness zoo needs to prove to environmentalists 
that it has x number of mating pairs of bears.

You must check within string (s) to fid all of the mating pairs, and return a string containing only them. 
Line them up for inspection.

Rules: Bears are either 'B' (male) or '8' (female), Bears must be together in male/female pairs 'B8' or '8B',
 Mating pairs must involve two distinct bears each ('B8B' may look fun, but does not count as two pairs).

Return an array containing a string of only the mating pairs available. e.g:

'EvHB8KN8ik8BiyxfeyKBmiCMj' ---> 'B88B' (empty string if there are no pairs)

and true if the number is more than or equal to x, false if not:

(6, 'EvHB8KN8ik8BiyxfeyKBmiCMj') ---> ['B88B', false];

x will always be a positive integer, and s will never be empty

- regular expression is not allow 


*/

function pairOfBears(nb,string){
	var result = []
	var test1 = "B8"
	var test2 = "8B"
	var ch =""
	var count = 0
	var i = 0
	while(i < string.length){
		console.log("test")
		var index = string.toUpperCase().indexOf(test1) || string.toUpperCase().indexOf(test2)
		if(index !== -1 ){
			var el = string.slice(index,index+2)
			var string = string.replace(el,'')	
			string = string.replace(el,'')
			count++
		}
		ch += el
		i++

	}
	result.push(ch)
	result.push(count>nb)

	return result
}

function remove(str, start, n) {
    return str.substr(0, n) + str.substr(start + n);
}