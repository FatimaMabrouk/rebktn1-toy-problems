/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

largestProductOfThree([ 2, 1, 3, 7 ]) // 42
largestProductOfThree([ 0, 2, 3 ]) //	0
largestProductOfThree([1, 4, -5, -2]) // 40
*/
<<<<<<< HEAD
function largestProductOfThree(array) {
    var products = [];
        // try every combinaison and push it to the products array
        for(var i = 0; i < array.length; i++){
            var val = array[i] * array[i+1];
            for(var j = i + 2; j < array.length; j++){
                var newArr = array.slice(j)
                for(k=0; k < newArr.length; k++){
                products.push(val * Math.max(...newArr));}
            }
        }
    console.log(products)
    return Math.max(...products)
    }

=======

function largestProductOfThree(array) {}
>>>>>>> 632900277eef9939715ba7b58d49cca1b3253a86
