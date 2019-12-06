function dec2FactString(decimalNumber) {
    const factorialsRepresentation = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let factString = "0",
    // the first element =0   at i=1
    i = 2;
    while (decimalNumber) {
        factString = factorialsRepresentation[decimalNumber % i] + factString;
        decimalNumber = Math.floor(decimalNumber / i);
        i++;
    }
    return factString;
}

function factString2Dec(factString) {
    const factorialsRepresentation = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); 
    var counter = 0;
    var sum = 0; 
    for (var i = factString.length - 1; i >= 0; i--) {
        var element = factString[i]; 
        var factorialNumber = factorialsRepresentation.indexOf(element); 
        sum = sum + factorialNumber * factorial(counter);
        counter++;
    } 
    return sum;
} 
function factorial(x) {
    if (x === 0) {
        return 1;
    } 
    return x * factorial(x - 1);
}