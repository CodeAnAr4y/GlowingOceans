// hide and show header backgound on scrolling
// const header = document.querySelector('header');

// window.addEventListener('scroll', () => {
//     if (window.scrollY > 50) {
//         header.classList.add('transparent');
//     } else {
//         header.classList.remove('transparent');
//     }
// });

// toggle menu
// const headerMenu = document.getElementById('menu');
// const expandedMenu = document.querySelector('.expanded-menu');
// const menuIcon = headerMenu.querySelector('img');

// headerMenu.addEventListener('click', () => {
//     expandedMenu.classList.toggle('open');

//     if (expandedMenu.classList.contains('open')) {
//         menuIcon.src = 'assets/icons/close mobile.svg';
//     } else {
//         menuIcon.src = 'assets/header-menu.svg';
//     }
// });

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
document.addEventListener("DOMContentLoaded", () => {
    const gifImages = document.querySelectorAll(".gif-toggle");

    gifImages.forEach((gifImage) => {
        // Desktop: проигрывать при наведении
        if (window.innerWidth >= 768) {
            gifImage.addEventListener("mouseenter", () => {
                gifImage.src = gifImage.getAttribute("data-gif");
            });

            gifImage.addEventListener("mouseleave", () => {
                gifImage.src = gifImage.getAttribute("data-static");
            });
        } else {
            // Mobile: проигрывать при зажатии
            gifImage.addEventListener("touchstart", () => {
                gifImage.src = gifImage.getAttribute("data-gif");
            });

            gifImage.addEventListener("touchend", () => {
                gifImage.src = gifImage.getAttribute("data-static");
            });
        }
    });
});

// Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 10,
});
