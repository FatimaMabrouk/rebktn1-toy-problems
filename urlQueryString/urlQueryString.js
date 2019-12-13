/*
URL Query String
Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.

HINT: You may use decodeURIComponent()

parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/

function parseQueryString(url) {
    //stop at the quetion mark
    // take the string and decode It
    var result = []; 
    let queryStr = url.slice(url.indexOf("?")+1)
    queryStr = decodeURIComponent(queryStr);
	//console.log(queryStr)
	let qArr = queryStr.split('&')
	//console.log(qArr)
	qArr.forEach((elem)=>{result.push(elem.split("="))})
	return result;

}
