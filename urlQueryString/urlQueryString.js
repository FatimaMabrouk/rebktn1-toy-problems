/*


Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.

HINT: You may use decodeURIComponent()

parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/

function parseQueryString(url) {
	var link = decodeURI(url);
   var str = link.indexOf('?')
    link = link.slice(str +1)
   
     return Object.entries(JSON.parse('{"' + (link.replace(/&/g, "\",\"").replace(/=/g,"\":\"")) + '"}'))

}
