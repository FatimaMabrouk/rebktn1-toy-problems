/*
URL Query String
Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.

HINT: You may use decodeURIComponent()

parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/

function parseQueryString(url) {
	var resultArr = [];
	var filtered = url.slice(url.indexOf('?'), url.length);
	var decoded  = decodeURIComponent(filtered);
		resultArr.push(decoded.split('').map( function  (element, index, array)  {
			if ( element !== '?' && element !== '=' && element !== '/' && element !== '&' && element !== ':') {
				return element;
			}
		}));
		return resultArr.join.(' ').split(' ');
	}

//(?,=,/,&,:)
