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

// Component 1 Swiper
const swiper1 = new Swiper(".c1-swiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    effect: "slide",
});

//   Component 3 Swiper
let swiper2;
function initC3Swiper() {
    const screenWidth = window.innerWidth;
    if (swiper2) {
        swiper2.destroy(true, true);
    }

    if (screenWidth < 576) {
        swiper2 = new Swiper(".c3-swiper", {
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 10,
        });
    } else {
        swiper2 = new Swiper(".c3-swiper", {
            slidesPerView: 4,
            centeredSlides: false,
            spaceBetween: 30,
        });
    }
}

// Component 4 Swiper
let swiper3;
function initC5Swiper() {
    const screenWidth = window.innerWidth;
    if (swiper3) {
        swiper3.destroy(true, true);
    }

    if (screenWidth < 576) {
        swiper3 = new Swiper(".c5-swiper", {
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 10,
        });
    } else {
        swiper3 = new Swiper(".c5-swiper", {
            slidesPerView: 3,
            centeredSlides: false,
            spaceBetween: 30,
            slidesPerGroup: 3,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    initC3Swiper();
    initC5Swiper();
    window.addEventListener("resize", () => {
        initC3Swiper();
        initC5Swiper();
    });
});
