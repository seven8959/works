// No scroll for body when burger-menu active

const menuBtn = document.querySelector(".menu__btn")
menuBtn.addEventListener("click", (function () {
    document.querySelector("body").classList.toggle("non-scroll")
}
))