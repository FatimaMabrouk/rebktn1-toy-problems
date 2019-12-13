/*
URL Query String
Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.

HINT: You may use decodeURIComponent()

parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/

function parseQueryString(url) {
	var query = url.indexOf('?');
	query = url.slice(query+1)
	var temp = '';
	var arr = [];
	var arr2 = [];
    // var arr = query.split('=') ;
    for (var i = 0; i < query.length; i++) {
        //console.log(query[i])
    	if(query[i] !== '=' && query[i] !== '&'){
    		temp += query[i];
         } 
          
    	else if(query[i] === '='){
            arr2.push(temp)
            
    		arr.push(arr2)
    		temp = '';
    	} 
        else if(query[i] === '&'){
             arr2 = [];
             arr2.push(temp)
             arr.push(arr2)
    		 arr2 = [];
             temp = '';
          	}
    	
    }

  return arr;
}
parseQueryString("http://example.com?a=hello&b=99")