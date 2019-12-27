/*
Balanced Brackets
Given a string, return true if its arrangement of parenthesis (), curly-brackets {}, and square-brackets [] would be considered valid in code and mathematics (is balanced).

isBalanced("(x + y) - (4)") // true
isBalanced("(((10 ) ()) ((?)(:)))") // true
isBalanced("[{()}]") // true
isBalanced("(50)(") // false
isBalanced("[{]}") // false
*/

var isBalanced = function(str) {
obj={
	'(':')' ,
	'{':'}' ,
	'[':']' 
}

if(str.length >0){
for (var i = 0; i < str.length; i++) {
	if(obj[str[i]] !== undefined ){

      if( isBalancedP(str,str[i],obj[str[i]] )){

      	var closeIndex = str.indexOf(obj[str[i]])	

      	var subStr = str.substr(i+1,closeIndex-1)	
      		//console.log(result)

       var result = isBalanced(subStr) 
       if(!result) return false

      	i=closeIndex-1
       } else {
  
           return false
    }
	}
}}
return true
};

var isBalancedP = function(str,p1,p2) {
	obj={
		p1:1,
		p2:-1
	}
var p=0
var val=0
	for (var i = 0; i < str.length; i++) {
		if(obj[str[i]] !== undefined  ) {
         p = p + obj[str[i]]
         if( p <0) return false
		}
	}
	if(p === 0) return true
		return false
};
