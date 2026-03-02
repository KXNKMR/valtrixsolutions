let menuBtn = document.querySelector(".menu-btn")
let menu = document.querySelector(".navbar")

menuBtn.addEventListener("click", function(event){
    event.preventDefault();
    menu.classList.toggle("active")
})