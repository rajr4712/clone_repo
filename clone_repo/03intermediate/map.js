let m = new Map();

m.set(1, "Uno1");
m.set(2, "Uno2");
m.set(3, "Uno3");

//gives keys
for (let key of m.keys()) {
    console.log(key);
}

//gives values
for (let value of m.values()) {
    console.log(value);
}

//gives keys and values
for (let [key, value] of m) {
    console.log(key, value);
}

//gives, values, forEach loop is designed thinking that u gonna do something with the values, to it treats keys as indices.
m.forEach((value) => {
    console.log(value);
})
