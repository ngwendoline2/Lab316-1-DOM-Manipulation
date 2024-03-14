

//Do not modify any of the contents of the index.html or styles.css files.
//demonstrate DOM manipulation through JavaScript.

//Part 1 : Getting Started
//Select and cache the <main> element in a variable named mainEl.
let mainEl = document.querySelector("main");
console.log(mainEl);

//set the background color of mainEl
mainEl.style.backgroundColor = "var(--main-bg)";

//set the content of mainEl to <h1>DOM
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

//add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr");

//Part 2: Create a menu Bar.
// select and cashe the <nav id="top-menu"> element in a variable named topMenuEl
let topMenuEl = document.querySelector("top-menu");
console.log(topMenuEl);

