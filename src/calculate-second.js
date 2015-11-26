function calculate_median(arr) {
    var result;
    var newArr = arr.filter(function(item,i){
        return i%2===1;
    }).sort();
    if(newArr.length%2===1){
        var position = parseInt(newArr.length/2);
        result = newArr[position];
    }else if(newArr.length%2===0){
        var position = parseInt(newArr.length/2);
        result=(newArr[position]+newArr[position-1])/2;
    }
    return result;
}
