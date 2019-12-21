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
//Solution 1
function matingPairs(n,str){
	var solutionPair=["",false];
	var pair=""
	var nbPair=0;
	
for (var i = 0; i < str.length; i++) {

	if(str[i] === 'B'){
		if(i+1 === str.length) return solutionPair
		if(str[i+1] === '8'){
			pair =pair+str[i] + str[i+1];
			solutionPair[0]=pair;
			solutionPair[1]=+solutionPair[1]+1
			i++;
		}
	}
	else if(str[i] === '8'){
			if(i+1 === str.length) return solutionPair
		if(str[i+1] === 'B'){
			pair =pair+str[i] + str[i+1];
			solutionPair[0]=pair;
			solutionPair[1]=+solutionPair[1]+1
			i++;
		}
	}
}
if(solutionPair[1] >= n) solutionPair[1]=true
else solutionPair[1]=false
return solutionPair;
}

//Solution 2
function matingPairs(n,str){
	var result=["",false]
	var regExp=/B8|8B/g
	var arrayOfPairs=str.match(regExp)
	if(arrayOfPairs.length >= n){
    result[1]=true
	}
	result[0]=arrayOfPairs.join('');
	return result
}