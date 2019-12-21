/*
Character Frequency
Write a function call characterFrequency that takes as its input a string and returns an array
of arrays as shown below sorted in descending order by frequency
and then by ascending order by character.


characterFrequency("aaabbc") -->    [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

characterFrequency("mississippi")  -->  [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

characterFrequency("") -->  [ ]
*/

console.clear();
var characterFrequency = function(str) {
    let characters = {};

    for (var i = 0; i < str.length; i++) {
        let char = str.charAt(i);

        if (characters[char]) {
            characters[char]++;
        } else {
            characters[char] = 1;
        }
    }

    return Object.entries(characters).sort((elem1,elem2)=> elem2[1] - elem1[1]);
}

console.log(characterFrequency("aaabbc"));
console.log(characterFrequency("mississippi"));