/*
URL Query String
Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.

HINT: You may use decodeURIComponent()

parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/

function parseQueryString(url) {
	var str =url.slice(url.indexOf('?'))
	var decodedStr = decodeURIComponent(str).slice(1)
	var splitted=decodedStr.split('&')
	var result = []
	for(var i =0; i<splitted.length; i++) {
		var  pairs = splitted[i].split('=')
		if(pairs[0]&&pairs[1])
		result.push([pairs[0],pairs[1]])
	}
	if(result.length ===0) {
		return undefined
	}
	return result


}
