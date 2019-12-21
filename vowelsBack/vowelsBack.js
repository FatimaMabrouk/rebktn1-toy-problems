// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.

var vowelBack = function(string){

  string = string.split("")
  var az = "abcdefghijklmnopqrstuvwxyz".split("")
  for ( var i = 0 ; i < string.length ; i++){
     var index = az.indexOf(string[i])
     switch(string[i]){
      case "a":
      case "i":
      case "u":
       if(az[index-5] !== undefined){
                if(az[index-5]!=="d"){
                    string[i]=az[index-5]
                  }
            }else{
              var subindex =  5  - index
              string[i] = az[az.length-subindex]
            }     
      break;
      case "o":
      case "c":
            string[i]=az[index-1]     
        break;
        case "d":
            string[i]=az[index-3]   
            break;
        case "e":     
            string[i]=az[index-4]
            break;
      default:
          if (az[index+9] !== undefined){
            if(az[index+9] !== "c" && az[index+9] !== "o" && 
                az[index+9] !== "d" && az[index+9] !== "e"){
                 string[i]= az[index + 9]
                  }
            }else{
                var subindex = 17 - index
                var abs = Math.abs(subindex) 
                if(az[abs] !== "c" && az[abs] !== "o" &&
                 az[abs] !== "d" && az[abs] !== "e"){
                    string[i]= az[abs]
                 }                    
            }     
        }
    }
  
    return string.join("") 
}

