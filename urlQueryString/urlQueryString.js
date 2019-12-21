/*
URL Query String
Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.

HINT: You may use decodeURIComponent()

parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/

function parseQueryString(url) {
    var buket = []
    var test = ["?","%","="]

    if (url.indexOf("?") === -1) {
        return undefined
    }
    res = url.slice(url.indexOf("?") + 1)
    var tab = res.split("&")
    for (var i = 0; i < tab.length; i++){
        helper(tab[i])
    }
   
}
function helper(element) {
    var test = ["?", "%", "="]
    var tab = element.split("")
    

    for (var i = 0; i < test.length; i++){
        if (element.includes(test[i])) {
            /* ch = element.slice(0, i+1)
            tab.slice(0,i) */
            console.log(test[i])
            var result = element.replace(test[i],' ')
        } 
    }
    console.log(element)
    console.log(ch)
    console.log(result)

}