"use strict";

const navBtn = document.querySelector(".nav-btn");
const navList = document.querySelector(".nav-list-phone");

navBtn.addEventListener("click", () => {
    navList.classList.toggle("toggle-nav");
});
