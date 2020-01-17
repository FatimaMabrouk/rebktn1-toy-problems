function zeroSum(arr) {
	var obj={}
	
	for(var i=0;i<arr.length;i++){
		obj[arr[i]] = arr[i]
	}

	for(var i=0;i<arr.length;i++){
		if(obj[arr[i]] && obj[-arr[i]]){
			return true
		}
	}

	return false

}