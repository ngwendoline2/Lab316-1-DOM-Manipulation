

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
let topMenuEl = document.querySelector("#top-menu");
console.log(topMenuEl);
// set the height of the topMenuEl element to be 100%
topMenuEl.style.height = "100%";
// set backgroundColor of topMenuEl
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
// Add a class of flex-around 
topMenuEl.classList = 'flex-around';

//Part 3: Adding Menu Buttons.
// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

 //Iterate over the entire menuLinks
menuLinks.forEach(link => {
    //Create an <a> element.
    const newLink = document.createElement('a');
    //set href attribute with property of the link.
    newLink.href = link.href;
    // Set the new elementto the value of the text.
    newLink.textContent = link.text;
    //Append the new element.
    topMenuEl.appendChild(newLink);
});


