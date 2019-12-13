/*
URL Query String
Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.

HINT: You may use decodeURIComponent()
sd
parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/

function parseQueryString(url) {
    Url = decodeURIComponent(url);
    let key='';
    let value ='';
    let result = [];
    let i = 19;
    if(!Url.slice(18,19) === '?'){
        return undefined;
    }

        
    while(Url[i]){

      while(Url[i] !== '=' && Url[i]){
        if(Url[i] && Url[i]!=='&' && Url[i]!=='=')
        key+=Url[i];
        i++;
      }

      while(Url[i] !==  '&' && Url[i]){
        i++;
        if(Url[i] && Url[i]!=='&' && Url[i]!== '=')
        value+=Url[i];
        
      }

      result.push([key,value]);
      key='';
      value = '';

    }

return result;
}
