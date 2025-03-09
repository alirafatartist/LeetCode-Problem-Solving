var createCounter = function(n) {
    return ()=> n++
};
const counter = createCounter(1);