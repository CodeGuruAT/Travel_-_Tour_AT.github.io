const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.window.scrollY > 60)
});

let menu = document.querySelector('#Menuicon');
let navber = document.querySelector('.navber');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navber.classList.toggle('open');
};










