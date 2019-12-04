// Given an array X of positive integers, its elements are to be transformed by running the following operation 
//on them as many times as required:

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

function greater(a, b) {
    return a >= b 
}
function copy(tab) {
    copyArr = tab.map((x) => x);
    return copyArr
}
function check(arr) {
    var test = arr[0]
    for (var i = 1; i < arr.length; i++){
        if (arr[i] !== test) {
            return false 
        }
    }
    return true 
}

function samllestPossibleSum(arr) {
    var index = arr.length - 1 
    var count = 1
    var copyArr = copy(arr)


    function inner(index, copyArr) {
        var start = copyArr[index]
        copyArr.splice(index)
       // var count += 1 
        if (check(arr)) {
            return arr[0]
        }
        for (var i = copyArr.length - 1; i >= 0; i--){
            greater(start, copyArr[i]) ? copyArr[index] = start - copyArr[i] : copyArr[index] = copyArr[i] - start;
        }
        
        inner(index-1,copyArr=copy(arr))

    } 
    inner(index, copyArr)
    
}