var createCounter = function(init) {
    let a =init
    return{
        increment(){
            return ++a
        },
        reset(){
            a= init
            return a
        },
        decrement(){
            return --a
        }
    }
};

const counter = createCounter(5)
 console.log(counter.increment()); // 6
 console.log(counter.reset()); // 5
 console.log(counter.decrement()); // 4