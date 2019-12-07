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

function findMatingPairs(nbr, string) {
    let result = [""];
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'B' || string[i] === '8') {
            //make a copy of the two letters
            let str = string.slice(i, i + 2);
            //set a condition to check if any letter before or after the current pair of letters is equal to B or 8
            let condition = string[i + 2] !== "B" && string[i + 2] !== "8" && string[i - 1] !== "B" && string[i - 1] !== "8";
            if ((str === "8B" || str === "B8") && condition) {
                result[0] += str;
            }
        }
    }
    if (result[0].length / 2 >= nbr) {
        result.push(true);
    } else {
        result.push(false);
    }
    return result;
}