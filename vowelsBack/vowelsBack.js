// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.


function vowelsBack(string, result = "") {
    const vowels = {
        a: -5,
        i: -5,
        u: -5
    };
    const specialCases = {
        c: -1,
        o: -1,
        d: -3,
        e: -4
    };
    const consonantes = {
        b: +9,
        f: +9,
        g: +9,
        h: +9,
        j: +9,
        k: +9,
        l: +9,
        m: +9,
        n: +9,
        p: +9,
        q: +9,
        r: +9,
        s: +9,
        t: +9,
        v: +9,
        w: +9,
        x: +9,
        y: +9,
        z: +9

    }
    //function that check if the sacii code is more than 122 or less than 97 
    function checkIndex(number) {
        if (number < 97) {
            number = 123 - (97 - number)
        }
        if (number > 122) {
            number = 96 + (number - 122)
        }
        return number
    }
    //function that takes a letter and change it folowing the rules
    function giveBackLetter(letter, object) {

        var nextLetter = string.charCodeAt(letter) + object[letter];
        if (!specialCases[String.fromCharCode(checkIndex(nextLetter))]) {
            result += String.fromCharCode(checkIndex(nextLetter));
        } else {
            result += letter;
        }

    }
    if (string.length === 0) {
        return result;
    }

    if (specialCases[string[0]]) {
        giveBackLetter(string[0], specialCases);
        return vowelsBack(string.slice(1), result);

    }
    if (vowels[string[0]]) {
        giveBackLetter(string[0], vowels);
        return vowelsBack(string.slice(1), result);

    }
    giveBackLetter(string[0], consonantes);
    return vowelsBack(string.slice(1), result);
}
