/*
URL Query String
Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.

HINT: You may use decodeURIComponent()

parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/

console.clear();
function parseQueryString(url) {
    let decoded = decodeURIComponent(url);

    if (decoded.indexOf('?') < 0) {
        return;
    }

    let paramStr = decoded.slice(decoded.indexOf('?') + 1);
    return [paramStr.split('&').map((val)=>[val.slice(0, val.indexOf('=')), val.slice(val.indexOf('=') + 1)])];
}

// Test Cases

console.log(parseQueryString("http://example.com?a=hello&b=99"));
console.log(parseQueryString("http://example.com?msg=hello%20world"));
console.log(parseQueryString("http://example.com"));
