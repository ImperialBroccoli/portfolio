const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

let navLinks = document.querySelectorAll('.nav-menu a')

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll("a").forEach( n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");

    navLinks.forEach(links => {
        links.classList.remove('active');
        n.classList.add('active');
    });
}));
