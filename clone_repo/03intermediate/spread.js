function add(a, b) {
    return a + b;
}

var A = [5, 3];
console.log(add(...A)); // Spread operator **





//imagine like this args gonna be an array and we need to loop through it.
function addAll(...args) { // The Rest Operator **
    let ans = 0;
    for (var a of args) {
        ans += a;
    }
    return ans;
}

console.log(addAll(5, 1, 4, 2, 4));