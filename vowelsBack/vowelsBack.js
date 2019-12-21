// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.

var newAlpha = function(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let newA = [];

    for (var c of alphabet) {
        let x = alphabet.indexOf(c);
        if (isConsonant(c)) {
            newA[x + 9] = c;
        }
        // If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.
        else if (c === 'c' || c === 'o') {
            newA[x - 1] = c;
        } else if (c === 'd') {
            newA[x - 3] = c;
        } else if (c === 'e') {
            newA[x - 4] = c;
        } else {
            // Move vowels back 5 places through the alphabet.
            // If they pass 'a', start again at 'z'.
            if (newA[x - 5]) {
                newA[x - 5] = c;
            } else {
                newA[newA.indexOf('z') - 5] = c;
            }

        }
    }

    console.log(newA.join(''))

}

var isConsonant = function(letter) {
    return !'aeiou'.includes(letter);
}

console.log(newAlpha('test'));