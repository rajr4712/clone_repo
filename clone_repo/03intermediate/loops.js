//forEach
var arr = ["lakshay", "2020", "seltos"];
arr.forEach((e) => {
    console.log(e);
})

//for of
for (const e of arr) {
    console.log(e);
}

//for in [kind of looping through maps [key: value]]
let map = {
    name: "Lakshay",
    age: 111
}
for (const e in map) {
    console.log(`Key is: ${e} & Value is: ${map[e]}`);
}