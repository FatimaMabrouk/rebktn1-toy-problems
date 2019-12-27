var rockPaperScissors = function (rounds) {
 var tList = ["R","P","S"]
    var result  = []
 var tRandom = function(){
 

 }
 for(var j=0;j< rounds;j++){
    var resultString =""
        for (var i=0; i < tList.length;i++){
             resultString = resultString + (tList[getRandomInt(3)])
         }
 result.push(resultString)
 
 }


    function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
    }
    return result
};
