var filter = function(arr, fn) {
    let filterdArray=[]
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i],i)) {
            filterdArray.push(arr[i])
        }
    }
    return filterdArray;
};

var firstIndex = function(n, i){
    return i === 0
}

var plusOne = function(n){
    return n+1
}

var greaterThan10 = function(n){
    return n > 10
}

let arr = [0,10,20,30]
console.log(filter(arr, greaterThan10));
console.log(filter(arr, firstIndex));
console.log(filter(arr, plusOne));