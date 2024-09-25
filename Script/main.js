// Typewriter Effect

const texts = [
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer"
]

let speed  =100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter


// nav bar 
let header = document.querySelector("header");
    let nav = document.querySelectorAll("nav");  // Select all nav-bar items
    window.onscroll = function() {
        if (window.scrollY > 0) {  // Check if the page has scrolled down
            header.classList.add("scrolled");
            nav.forEach(function(navItem) {
                navItem.classList.add("scrolled-nav");
            });
        } else {
            header.classList.remove("scrolled");
            nav.forEach(function(navItem) {
                navItem.classList.remove("scrolled-nav");
            });
        }
    };


    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('touchstart', function(e) {
            window.location.href = this.href;  // Force the link to navigate
        });
    });
    