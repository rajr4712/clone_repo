// var VS let in JS

//1
// console.log(name);

//if we use var console.log(name); will give output "undefined" but if let is used, log will give and error
// var name = "Lakshay";
// let name = "Lakshay";

//this is the use case of let, we want the error to be shown, because it is easy to debug.

//2. Another similar example
if (true) {
    // var age = 111;
    let age = 111;
    console.log(age);
}
// console.log(age); //age is available here as well if defined by var.
