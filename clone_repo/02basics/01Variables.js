var fullName = "Sidharth Agarwal";
//camel case vairables, uppercase starting functions
console.log(fullName);

// fullName = prompt("Enter Name:"); // To use this, we need to attach this to a browser.
console.log("Full Name is", fullName);

console.log(`Full Name is ${fullName}.`); //the better way.

console.log(3 ** 3); //3^3

// undefined, was never assigned.
// null, assigned but value not found.
// NaN, not a number

// Global context:
// Even though, fun() is defined later of it's calling. How can JS know it?
// In JS, there is a concept called context. In this, all functions goes to global context, browser's context name is window.
fun();
function fun() {
    console.log("In fun method.");
}

// Execution context
// 1. Function declaration are scanned and made available.
// 2. Variable declaration are scanned and made undefined.

// this, gives access to the global context, browser has Window, node console has {} empty scope.
console.log(this);

// Arrow function
fun = () => {
    console.log(this);
}

funa();

// every, do operation on every element
isEven = (n) => {
    return (n & 1) === 0;
}
var result = [2, 4, 5].every(isEven);
console.log(result);

//every with callback
var result = [2, 4, 2].every((n) => {
    return (n & 1) === 0;
});
console.log(result);

//fill
var t = [2, 3, 4, 5];
console.log(t.fill(0, 2, 3)); //output [ 2, 3, 0, 5 ] 

//filter
t = [0, 3, 0, 5];
console.log(t.filter((n) => {
    return n != 0;
}));

//slice
t = [0, 3, 0, 5];
console.log(t.slice(1, 3));

//splice
t = [1, 2, 3, 4, 5];
spliced_t = t.splice(1, 2, -1);
console.log("splice:", t, spliced_t); //output -> splice: [ 1, -1, 4, 5 ] [ 2, 3 ]
