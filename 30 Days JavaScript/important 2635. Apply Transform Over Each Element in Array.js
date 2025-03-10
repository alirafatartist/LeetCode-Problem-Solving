var map = function(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = fn(arr[i], i);
    }
    return arr;
};

var plusone = function(element,index){
    return element + 1
}
var plusI = function(n,i){
    return n + i
}
var constant = function(){
    return 42
}


let arr = [1,2,3]
console.log(map(arr,plusone));
console.log(map(arr,plusI));
console.log(map(arr,constant));