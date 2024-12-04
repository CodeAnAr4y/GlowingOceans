// toggle menu
const headerMenu = document.getElementById("menu");
const expandedMenu = document.querySelector(".expanded-menu");
const menuIcon = headerMenu.querySelector("img");

headerMenu.addEventListener("click", () => {
    expandedMenu.classList.toggle("open");

    if (expandedMenu.classList.contains("open")) {
        menuIcon.src = "assets/icons/close mobile.svg";
    } else {
        menuIcon.src = "assets/header-menu.svg";
    }
});

// Swiper script
const swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
});
const swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});
