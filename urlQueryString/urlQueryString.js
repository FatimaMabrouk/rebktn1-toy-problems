/*
URL Query String
Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.

HINT: You may use decodeURIComponent()

parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]

parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]

parseQueryString("http://example.com") // undefined
*/
console.log('a=hello&b=99'.split(''))



function parseQueryString(url) { //"http://example.com?a=hello&b=99"

	var dec = decodeURIComponent(url); //http://example.com?a=hello&b=99
	dec.split('?'); //[ 'http://example.com', 'a=hello&b=99' ]
	dec = dec[1].split('');

	if(dec.includes('%')) {
		dec.splice(dec.indexOf('%'),1);
	}
		if(dec.includes('%')) {
		dec.splice(dec.indexOf('%'),1);
	}
/*[
  'a', '=', 'h', 'e',
  'l', 'l', 'o',
  'b', '=', '9', '9'
]
*/
var result = [];
var eql = 0;
for(var i = 0; i < dec.length; i++) {
	
	if(dec[i] === '='){
		eql ++;
	}
	if(dec[i] !== '=') {
		array.push()
	}
}




}


