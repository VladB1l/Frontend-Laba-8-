let quantity = document.querySelectorAll(".quantity");
let nav_list = document.querySelector(".nav ul");
let sidebar_btn = document.querySelector(".sidebar_btn");
let sidebar = document.querySelector(".sidebar");
let close_btn = document.querySelector(".close_btn")

for (let i = 0; i < quantity.length; i++) {
    quantity[i].innerHTML = `0${i + 1}`;
}

let sidebar_nav = nav_list.cloneNode(true)
sidebar.append(sidebar_nav);

sidebar_btn.onclick = function () {
    sidebar.style.left = "0"
}

close_btn.onclick = function () {
    sidebar.style.left = "768px"
}

var swiper = new Swiper('.slaider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
});

let swiper2 = new Swiper('.projects', {

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,

    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 1,
        },
    },
});