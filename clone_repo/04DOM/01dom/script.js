var number = document.querySelector(".counterh1"); // #counter if Id
var txt = document.querySelector(".counterh2");

let i = 1;

// after every 1ms interval, this callback gonna execute.
setInterval(() => {
    if (i <= 1000) {
        number.innerText = i++;
    }
}, 1);

setTimeout(() => {
    txt.innerText = "Lakshay";
}, 3000); //run it after n (3ms) timeout.