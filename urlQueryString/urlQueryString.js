/*
URL Query String
Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.

HINT: You may use decodeURIComponent()

parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/

function parseQueryString(url) {
	var array = url.split('')
	var index1 = array.indexOf('?')
	var arr = array.splice(index1)

	var index2 = arr.indexOf('=')
	var index3 = arr.indexOf('&')
	
	// console.log(arr.slice(1,index2).join(''))
	// console.log(arr.slice(index2+1,index3).join(''))

	var partOne = [arr.slice(1, index2).join(''),arr.slice(index2+1, index3).join('')]
	var arr1 = arr.splice(arr.indexOf('&'))
	var partTwo =[arr1.slice(1, arr1.indexOf('=')).join(''),arr1.slice(arr1.indexOf('=')+1).join('')]

	return [partOne, partTwo]
}
