/*
URL Query String
Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.

HINT: You may use decodeURIComponent()

parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/

function parseQueryString(url) {
	var arr = [];
	var s = '';

	for (var i = i || 0; i < url.length; i++) {
		// parseInt(url[i], 10);
		// console.log(url[i])
		if (url[i] === '?') {
			s = url[i];
		}
		if (s !== '' && (url[i] !== '=' || url[i] !== '&' || url[i] !== '%')) {
			arr.push(url[i])
		}
	}
			return arr
}