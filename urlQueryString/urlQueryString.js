/*
URL Query String
Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.

HINT: You may use decodeURIComponent()

parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/

//Done

function parseQueryString(url) {
	url = decodeURIComponent(url);

	var finalArr = [];
	// if ? doesn't exist return undefined
	var ndxInter = url.indexOf("?");
	if(ndxInter === -1) {
		return undefined
	}
	//the string url will take only the characters starting from ?
	url = url.slice(ndxInter+1);
	//make an array query that take all queries splitted by &
	var query = url.split("&");
	//push inside fianlArr the key-value pairs  
	for(var i = 0;i<query.length;i++) {
		finalArr.push(query[i].split("="))
	}
	
	return finalArr
}
