/*
Character Frequency
Write a function call characterFrequency that takes as its input a string and returns an array
of arrays as shown below sorted in descending order by frequency
and then by ascending order by character.


characterFrequency("aaabbc") -->    [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

characterFrequency("mississippi")  -->  [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

characterFrequency("") -->  [ ]
*/

var characterFrequency = (str) => {
    var obj = new Map(); //create an object to store the chars and there occurance frequency
    var result = []; //create an array to store the results in
    //loop over the string
    for (var i = 0; i < str.length; i++) {
        //check if the char is already in the object
        if (obj.get(str[i])) {
            //increment by 1 the frequency
            obj.set(str[i], obj.get(str[i]) + 1)
        } else {
            //add the char to the object
            obj.set(str[i], 1);
        }
    }
    //return an array of array sorted out of the obj
    return Array.from(obj).sort((a, b) => {
        return b[1] - a[1]
    })
}