function single_element(arr) {
	var temp =[];
	var result=[];
	var isRepeated;
	for(var i=1;i<=arr.length;i++)
	{
		if(i%2===0){
			temp.push(arr[i-1]);
		}
	}
	for(var i=0;i<temp.length;i++){
		if (temp.indexOf(temp[i]) < 0) 
			result.push(temp[i]);
    }  
	return result;
}
