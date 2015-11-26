function calculate_median(arr) {
    var result;
    var newArr = arr.filter(function(item,i){
        return i%2===1;
    });
    return median(newArr);
}

function median(arr){
    var result;
    var len = arr.length;
    var newArr = arr.concat();
    newArr.sort(sortNum);
    if(len%2===1){
        result = newArr[parseInt(len/2)];
    }else if(len%2===0){
        result=(newArr[parseInt(len/2)]+newArr[parseInt(len/2)-1])/2;
    }
    return result;
}

function sortNum(a,b){
    return a-b;
}
