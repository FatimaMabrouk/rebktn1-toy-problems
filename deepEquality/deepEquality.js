/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange) {
    var keys = Object.keys(apple);
    var values = Object.values(apple);
    var oranges = Object.keys(orange);
    var orangeValues = Object.values(orange);
    for(var key in apple){
      if(typeof apple[key] === 'object'){
        var objInKey = Object.keys(apple[key])
        var singeleKey = objInKey.join('')
         keys.push(singeleKey)
       }
    }
    for(var i = 0; i < values.length; i++){
      if(typeof values[i] === 'object'){
        var valInArray = Object.values(values[i])
        var singleVal = valInArray.join('')
        values.slice(i, 1 )
        values.push(singleVal)

        console.log(values)
      }
    }
    for(var key in orange){
        if(typeof orange[key] === 'object'){
        var oraInKey = Object.keys(orange[key])
        var oneKey = (oraInKey.join(''))
         oranges.push(oneKey)
       }
    }

};
