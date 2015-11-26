function even_group_calculate_average(arr) {
    var result=[];
    var newArr = arr.filter(function(item,i){
        return i%2===1;
    }).filter(function(item){
        return item%2===0;
    }).reduce(function(p,item){
            var len = item.toString().length;
            if(!(len in p)){
                p[len]=[];
            }
            p[len].push(item);
            return p;
    },{})

    for(a in newArr){
        var temp = newArr[a].reduce(function(p,item){
            p+=item;
            return p;
        })
        result.push(temp/newArr[a].length);
    }

    return result.length==0?[0]:result;
}
