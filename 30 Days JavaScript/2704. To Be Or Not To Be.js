var expect = function(val) {
    return {
        toBe:function(n){
            if(val === n){
                return true
            }else{
                throw new Error("Not Equal")
            }
        },
        
        notToBe:function(m){
            if(val !== m){
                return true
            }else{
                throw new Error("Equal")
            }
        }
    }
}


console.log(expect(5).toBe(5));
console.log(expect(5).toBe(null));
console.log(expect(5).notToBe(null));
console.log(expect('10').toBe(10));