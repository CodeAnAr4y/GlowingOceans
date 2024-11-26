// hide and show header backgound on scrolling
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }
});

// toggle menu
const headerMenu = document.getElementById('menu');
const expandedMenu = document.querySelector('.expanded-menu');
const menuIcon = headerMenu.querySelector('img');

headerMenu.addEventListener('click', () => {
    expandedMenu.classList.toggle('open');

    if (expandedMenu.classList.contains('open')) {
        menuIcon.src = 'assets/icons/close mobile.svg';
    } else {
        menuIcon.src = 'assets/header-menu.svg';
    }
});

// Animated landing
const texts = document.querySelectorAll(".animative-text .text-block");
const ctaBlock = document.querySelector(".animative-text .cta-block");
let currentIndex = 0;

function showNextText() {
    if (currentIndex > 0) {
        texts[currentIndex - 1].classList.remove("active");
        texts[currentIndex - 1].classList.add("hidden");
    }

    if (currentIndex < texts.length) {
        const text = texts[currentIndex];
        text.classList.add("active");
        currentIndex++;

        setTimeout(showNextText, 2000);
    } else {
        ctaBlock.classList.add("active");
    }
}

if (window.innerWidth <= 576) {
    ctaBlock.classList.add("active");
} else {
    window.addEventListener("load", () => {
        setTimeout(showNextText, 500);
    });
}

// Play gif on hover
    // const gifImages = document.querySelectorAll(".gif-toggle");

    // gifImages.forEach((gifImage) => {
    //     if (window.innerWidth >= 576) {
    //         gifImage.addEventListener("mouseenter", () => {
    //             gifImage.src = gifImage.getAttribute("data-gif");
    //         });

    //         gifImage.addEventListener("mouseleave", () => {
    //             gifImage.src = gifImage.getAttribute("data-static");
    //         });
    //     } else {
    //         gifImage.src = gifImage.getAttribute("data-gif");
    //     }
    // });

// Swiper
let swiper;
function initSwiper() {
    const screenWidth = window.innerWidth;

    if (swiper) {
        swiper.destroy(true, true);
    }

    if (screenWidth < 576) {
        swiper = new Swiper(".mySwiper", {
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 10,
        });
    } else {
        swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            centeredSlides: false,
            spaceBetween: 10,
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    initSwiper();
    window.addEventListener("resize", () => {
        initSwiper();
    });
});

