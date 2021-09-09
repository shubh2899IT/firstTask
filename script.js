var arr = [1,2,3,4,5,6,7,8,9]

var res = (function(arr){
    return (arr.filter((ele) => {
        return ele % 2 !== 0
    }))
});
console.log(arr);