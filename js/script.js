// DOM Manipulation 316-part1-3

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

//  //Iterate over the entire menuLinks
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


//// ===== Part 2 Assignment =====\\\\\\
  
  
  // DOM manipulation part two
  // Restructure menuLink
  
  // Part 3.1
  const subMenuEl = document.querySelector("#sub-menu");
  
  // Part 3.2
  subMenuEl.style.height = "100%";
  
  // Part 3.3
  subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
  
  // Part 3.4
  subMenuEl.classList.add("flex-around");
  
  // Part 3.5
  subMenuEl.style.position = "absolute";
  
  // Part 3.6
  subMenuEl.style.top = "0";
  
  
  // Part 4.1
  
  topMenuLinks = topMenuEl.querySelectorAll("a");
  
  topMenuEl.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.tagName === "A") {
       console.log(event.target.textContent);
        event.target.classList.toggle("active");
        document.querySelectorAll(".menu-Links").forEach(function(link) {
          event.target.classList.remove("active");
        });
        }
        subMenuEl.innerHTML = "";
        const linkObj = menuLinks.find(link => link.text.toLocaleLowerCase() === event.target.textContent.toLocaleLowerCase());
        if (linkObj && linkObj.subLinks) {
          subMenuEl.style.top = "100%" 
          linkObj.subLinks.forEach(function(subLink) {
            const subEL = document.createElement("a");
            subEL.setAttribute("href", subLink.href);
            subEL.textContent = subLink.text;
            subMenuEl.appendChild(subEL);
          });
        } else {
          subMenuEl.style.top = "0";
          }
          subMenuEl.addEventListener('click', function(evt) {
            evt.preventDefault();
            if (evt.target.tagName !== "A") {
              return;
            }
              });
            });
  
  
  
  console.log(subMenuEl);
  console.log(topMenuEl);
  console.log(mainEl);