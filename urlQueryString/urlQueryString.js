/*
URL Query String
Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.

HINT: You may use decodeURIComponent()

parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/

function parseQueryString(url) {
	var result = [];
	var text = '';
	var arr = url.split('?').pop().split('=')
	var array = arr[0].split('')
	array.push(arr[1].split(''))
	
	console.log(array);


			for (var j = 0; j < array.length; j++) {
				if (array[j] === '&') {
					array.splice('&');
				}
				if (array[j] === '%') {
					array.splice('%');
				}
				if (array[j] === '2') {
					array.splice('2');
				}
				if (array[j] === '0') {
					array.splice('0');
				}
			}
			return array;
}


parseQueryString("http://example.com?msg=hello%20world")

parseQueryString("http://example.com?a=hello&b=99")