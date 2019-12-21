/*
URL Query String
Given a properly formatted URL, return the query string data as an array of key-value pairs, 
in the order that they appear.

HINT: You may use decodeURIComponent()

parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/

function parseQueryString(url) {
	var newUrl;
	var decUrl = decodeURIComponent(url);
		if(decUrl.includes("?")){
			newUrl = decUrl.split("?");
		}
		else {
			return undefined
		}
	
	
	var tab = [];
	//console.log(newUrl)	//["http://example.com", "a=hello&b=99"]
	var stringUrl = newUrl[1].split("&")
	//console.log(stringUrl) //["a=hello", "b=99"]

	for(var i = 0; i < stringUrl.length; i++) {
		//console.log(stringUrl[i]) //a=hello b=99
		tab.push(stringUrl[i].split("="));//["a", "hello"],["b", "99"]
	}
return tab;
}

