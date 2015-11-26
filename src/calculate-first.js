function single_element(arr) {
    var result = arr.filter(function(item,i){
		return i%2===1;
	}).filter(function(item,i,newArr){
		return newArr.indexOf(item)===newArr.lastIndexOf(item);
	})
	return result;
}
