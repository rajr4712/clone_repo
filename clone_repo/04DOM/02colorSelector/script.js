const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red)); // gives all CSS2Properties applied this element

// if we want to get a particular attribute of CSS use
// console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (element) => {
    return window.getComputedStyle(element).backgroundColor;
}

const magicColorChanger = (element, color) => {
    return element.addEventListener('mouseenter', () => {
        center.style.background = color;
    })
}

magicColorChanger(red, getBGColor(red));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(violet, getBGColor(violet));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(pink, getBGColor(pink));
