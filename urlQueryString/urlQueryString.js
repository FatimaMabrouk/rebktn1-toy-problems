/*
URL Query String
Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.

HINT: You may use decodeURIComponent()

parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/

function parseQueryString(url) {
    const urlArray = decodeURIComponent(url).split(/[?&]/);
    console.log(urlArray)
    if (urlArray.length === 1) return undefined

    let result = [];
    for (let i = 1; i < urlArray.length; i++) {
        arr = urlArray[i].split('=');
        result.push(arr)
        console.log(result, arr)
    }
    return result
}
