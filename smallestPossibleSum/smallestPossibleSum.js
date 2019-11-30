// Given an array X of positive integers, its elements are to be transformed by running the following operation on them as many times as required:

// if X[i] > X[j] then X[i] = X[i] - X[j]

// When no more transformations are possible, return its sum ("smallest possible sum").

// For instance, the successive transformation of the elements of input X = [6, 9, 21] is detailed below:

// X_1 = [6, 9, 12] # -> X_1[2] = X[2] - X[1] = 21 - 9
// X_2 = [6, 9, 6]  # -> X_2[2] = X_1[2] - X_1[0] = 12 - 6
// X_3 = [6, 3, 6]  # -> X_3[1] = X_2[1] - X_2[0] = 9 - 6
// X_4 = [6, 3, 3]  # -> X_4[2] = X_3[2] - X_3[1] = 6 - 3
// X_5 = [3, 3, 3]  # -> X_5[1] = X_4[0] - X_4[1] = 6 - 3

// The returning output is the sum of the final transformation (here 9).
// Example

// solution([6, 9, 21]) #-> 9

// Solution steps:

// [6, 9, 12] #-> X[2] = 21 - 9
// [6, 9, 6] #-> X[2] = 12 - 6
// [6, 3, 6] #-> X[1] = 9 - 6
// [6, 3, 3] #-> X[2] = 6 - 3
// [3, 3, 3] #-> X[1] = 6 - 3

// Additional notes:

// There are performance tests consisted of very big numbers and arrays of size at least 30000. Please write an efficient algorithm to prevent timeout.


//Solution 1
function findNod(a, b) {
    var r = 1;
    while (r != 0) {
        r = a % b;
        a = b;
        b = r;
    }

    return a;
}

function solution(numbers) {
    var n = numbers.length;
    var nod = numbers[0];

    for (var i = 1; i < n; i++)
        nod = findNod(nod, numbers[i]);

    return nod * n;
}

// Solution 2

function solution(numbers) {
    return numbers.length * numbers.reduce((p, c) => gcd(p, c));
}

function gcd(a, b) {
    if (b === 0) return a;
    else return gcd(b, a % b);
}


// Solution 3 
function solution(arr){
if(equalNums(arr)){
  return arr.reduce(function(a,b){
    return a + b;
    });
  } else {
    //sort the array
    var sorted = arr.sort(function(a,b){
      return a-b;
    });
    var last = sorted[arr.length-1] - sorted[0]
    sorted.pop();
    sorted.push(last);
    return solution(sorted);
  }
}
// check if all numbers are equal
function equalNums(arr){
  return arr.reduce(function(a, b){ return (a === b) ? a : NaN; });
}
