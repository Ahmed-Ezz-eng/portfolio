
// mobile menu

let barsBtn = document.querySelector("header li.barsIcon");
let navbar = document.querySelector("nav");

barsBtn.onclick = function() {
    navbar.classList.toggle("active");
}

// remove menu on scroll & click on a link

window.onscroll = function() {
    navbar.classList.remove("active");
}


// cursor animation
document.body.onmousemove = function (e) {
    let ele = document.createElement("div");
    ele.className = "div";
    let x = e.pageX;
    let y = e.pageY;
    ele.style.left = x - 10 + "px";
    ele.style.top = y - 10 + "px";


    document.body.appendChild(ele);

    setTimeout(() => {
        ele.remove()
    }, 500);
}

document.body.onmouseout = function() {
    this.style.overflowX = "hidden"
}



let navLinks = document.querySelectorAll("nav ul li");
let sections = document.querySelectorAll("section");


// scroll to section

navLinks.forEach(link => {

    link.onclick = function() {
        navbar.classList.remove("active");
        let targetSection = document.querySelector("." + this.id);
        window.scrollTo(0, targetSection.offsetTop - 70)
    }
})


// loading screen

let loading = document.querySelector(".loading")
let banner = document.querySelector(".banner");
        
        for(let x = 0; x < 400; x++) {
            banner.innerHTML+= "<div class='block'></div>";
        }

        let blocks = document.querySelectorAll(".block");
        
        blocks.forEach(b => {
            let duration =  Math.random() * 5;
            b.style.animationDuration = 2 + duration + "s";
            b.style.animationDelay = duration + "s";
        });

        setTimeout(() => {
            loading.classList.add("active");
        }, 15000)

window.onload = function() {
    loading.remove();
}