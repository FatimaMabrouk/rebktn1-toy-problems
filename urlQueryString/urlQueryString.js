/*
URL Query String
Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.

HINT: You may use decodeURIComponent()

parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/

function parseQueryString(url) {
    let queryData = decodeURIComponent(url);
    let check1;
    let check2;
    let element1 = "";
    let element2 = "";
    let result = [];
    let unde;

    for ( let i = 0; i < queryData.length; i++ ) {
        if ( check2 === true ) { element2 += queryData[i] }
        
        if ( queryData[i] === '=' ) { check1 = false ; check2 = true}
        
        if ( check1 === true ) { element1 += queryData[i] }
        
        if ( queryData[i] === '?' ) { check1 = true ; unde = 1 }

        if ( i === queryData.length-1 ) { result.push(element1); result.push(element2) }


    }
    
    if (!unde) return undefined;

    return [result];
}
