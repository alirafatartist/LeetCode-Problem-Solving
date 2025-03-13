const reduce = function (nums,fn,init) {
        if (nums.length == 0) return init
        let n = init;
            for (let i = 0; i < nums.length; i++) {
                n = fn(n, nums[i]);
            }
        return n;
        
    };

var sum = function(accum, curr){
    return accum + curr
}



nums = [1,2,3,4]
console.log(reduce(nums,sum,0));