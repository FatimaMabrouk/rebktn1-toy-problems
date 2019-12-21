// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet.
// If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. 
//If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3,
// and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', 
//revert it back to it's original value.

// Provided string will always be lower case, 
//won't be empty and will have no special characters.

function playWithStrings(str){
    var vowels = 'aeiou';
    var consonants = 'qwrtypsdfghjklzxcvbnm';
    var letters = 'abcdefghijklmnopqrstuvwxyz';
    var newStr = str.split('');
    if(!str || str === '') return;
    if(str.toLowerCase() !== str) return;
    let x = 0;
    while(x < str.length){
        if(vowels.includes(str[x])){
            for(let i = 0; i < letters.length; i++){
                if(str[x] === letters[i]){
                    let index = x;
                    for(let j = 0; j < 5; j++){
                        if(index === 0){
                            index = letters.length;
                        }
                        index--;
                    }
                    console.log(newStr[x])
                    if(letters[index] !== 'c' && letters[index] !== 'o' &&
                    letters[index] !== 'd' && letters[index] !== 'e'){
                        // let holder = newStr;
                        // newStr = holder.slice(index-1, str.length -1) + letters[index] + newStr.slice(0, index);
                        newStr[x] = letters[index];
                        console.log(newStr[x])
                        console.log(letters[index])
                    }
                }
            }
        }
        else if(consonants.includes(str[x])){
            for(let i = 0; i < letters.length; i++){
                if(str[x] === letters[i]){
                    let index = x;
                    for(let j = 0; j < 9; j++){
                        if(index === letters.length){
                            index = 0;
                        }
                        index++;
                    }
                    console.log(newStr[x])
                    if(letters[index] !== 'c' && letters[index] !== 'o' &&
                    letters[index] !== 'd' && letters[index] !== 'e'){
                        // let holder = newStr;
                        // newStr = holder.slice(index-1, str.length -1) + letters[index] + newStr.slice(0, index);
                        
                        // newStr = holder.slice(index-1, str.length -1) + letters[index] + holder.slice(0, index);
                        newStr[x] = letters[index];
                        console.log(newStr[x])
                        console.log(letters[index])
                    }
                }
            }
        }
        x++;
    }
    return newStr.join('');
}