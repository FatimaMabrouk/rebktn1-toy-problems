/*
Character Frequency
Write a function call characterFrequency that takes as its input a string and returns an array
of arrays as shown below sorted in descending order by frequency
and then by ascending order by character.


characterFrequency("aaabbc") -->    [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

characterFrequency("mississippi")  -->  [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

characterFrequency("") -->  [ ]
*/

function sortIt(arr, i = 0){
    if(i > arr.length - 2) return arr;

    if(arr[i][1] < arr[i+1][1]){
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
    }
    return sortIt(arr, i + 1);
}

function characterFrequency(str){
    var i = 0;
    var result = [];
    while(i < str.length){
        var contains = false;
        for(var j = 0; j < result.length; j++){
            if(result[j][0] === str[i]){
                result[j][1] = result[j][1] + 1;
                contains = true;
            }
        }
        if(!contains) { result.push([str[i], 1]);}
        i++;
    }
    return sortIt(result);
}