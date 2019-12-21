function characterFrequency(str){
    var str1 = Array.from(str).sort().join(''); //  "iiiimppssss"
    //var str1 = str.split("").sort().join("");
    var result = [];

    var rec = function(str1) {
        if(str1 === "") {return;}
        var lIO = str1.lastIndexOf(str1[0]) + 1; //3 + 1
        result.push([str1[0],lIO]);
        return rec(str1.substr(lIO)); //subtr(numb)
    }
    rec(str1);



    // while(str1 !== '') {
    //     var lIO = str1.lastIndexOf(str1[0]) + 1; //3 + 1
    //     result.push([str1[0], lIO]);
    //     str1.substr(lIO); //mppssss
    // }
    return result.sort(function(a,b){return b[1]-a[1]});
}
