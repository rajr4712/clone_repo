const courses = [
    {
        name: "React Course 1",
        price: "2.2"
    },
    {
        name: "React Course 2",
        price: "1.3"
    },
    {
        name: "React Course 3",
        price: "4.3"
    },
    {
        name: "React Course 4",
        price: "3.3"
    }
];


{/* <ul class="list-group">
    <li class="list-group-item">
        Javascript course<span class="float-right">$2.1</span>
    </li>
</ul> */}
function generateList() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = ""
    courses.forEach(course => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode("$" + course.price);
        span.appendChild(price);
        li.appendChild(span);

        ul.appendChild(li);
    })
}

// generateList();
window.addEventListener("load", generateList); //something similar to componentDidMount of React.

//Sort Courses Low to High
const button = document.querySelector(".sort-btn");
button.addEventListener("click", () => {
    courses.sort((a, b) => {
        return a.price > b.price;
    });
    generateList();
});

//Sort Courses High to Low
const button2 = document.querySelector(".sort2-btn");
button2.addEventListener("click", () => {
    courses.sort((a, b) => {
        return a.price < b.price;
    });
    generateList();
});
