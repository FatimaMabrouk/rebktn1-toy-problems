/*
URL Query String
Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.

HINT: You may use decodeURIComponent()

parseQueryString("http://example.com?") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/
//solution1
function parseQueryString(url) {
	var index = url.indexOf("?") + 1 ;
	var str = url.substr(index);
	var result = []
	var arr = []
  var array = str.split('&')

	for (var i = 0; i < array.length; i++) {
		arr = array[i].split('=');
	
	 	result.push([arr[0],decodeURIComponent(arr[1])])
	}
if(result.length === 0) return undefined
return result
}


//****************solution 2
function parseQueryString(url) {
var regul = /^[?]\w/g
var array = url.match(regul)
...
}