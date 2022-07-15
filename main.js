let menu = document.querySelector("#menu");

let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-times")
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move")
};
window.onscroll = () => {
    navbar.classList.remove("open-menu");
}


// menu.onclick = () => {
//     menu.classList.toggle('fas fa-times');
// }

// scroll top
let scrollTop = document.querySelector(".scroll-top");
window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
});