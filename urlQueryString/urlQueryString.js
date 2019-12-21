/*
URL Query String
Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.
HINT: You may use decodeURIComponent()
parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/

function parseQueryString(url) {
    decoded = decodeURIComponent(url)
    var resultArray = []
    for(var i = 0; i<decoded.length;i++ ){
        if(decoded[i] === "?"){
            i++
            var firstItem = []
            while(i < decoded.length){
                firstItem.push(decoded[i])
                i++
            }
            resultArray.push(firstItem)
        }
    }
    var somethingToAdd =[]
    var resultAsStringArray = resultArray.toString().split("=");
        for(var array in resultAsStringArray){   
          resultAsStringArray[array] = resultAsStringArray[array].toString().replace(/,/g,"")
        }
    return resultAsStringArray

}