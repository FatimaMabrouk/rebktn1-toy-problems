/*
URL Query String
Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.

HINT: You may use decodeURIComponent()

parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/

function parseQueryString(url) {

  var strIndex = url.indexOf("?")
  var newStr = url.substring(strIndex+1)
  var deccode = decodeURIComponent(newStr)
  var array = []

  var index = deccode.indexOf("&")

  if(index > -1 ){
    
    var x = deccode.split("&").join("=").split("=")
    for ( var i = 0 ; i < x.length; i=i+2){
      array.push([x[i],x[i+1]])
    }
  }else{
    array.push(deccode.split("="))  
  }
 
 return array 
}

// var test = parseQueryString("http://example.com?a=hello&b=99")

