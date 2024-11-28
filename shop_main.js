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

// Component 1 Swiper
const swiper1 = new Swiper('.c1-swiper', {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: "slide"
  });


//   Component 3 Swiper
let swiper2;
function initSwiper() {
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

document.addEventListener("DOMContentLoaded", () => {
    initSwiper();
    window.addEventListener("resize", () => {
        initSwiper();
    });
});