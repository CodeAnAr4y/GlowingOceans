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
const texts = document.querySelectorAll('.animative-text .text-block');
const ctaBlock = document.querySelector('.animative-text .cta-block');
let currentIndex = 0;

function showNextText() {
    if (currentIndex > 0) {
        texts[currentIndex - 1].classList.remove('active');
        texts[currentIndex - 1].classList.add('hidden');
    }

    if (currentIndex < texts.length) {
        const text = texts[currentIndex];
        text.classList.add('active');
        currentIndex++;

        setTimeout(showNextText, 2000);
    } else {
        ctaBlock.classList.add('active');
    }
}

window.addEventListener('load', () => {
    setTimeout(showNextText, 500);
});

// Play gif on hover
document.addEventListener('DOMContentLoaded', () => {
    const gifImage = document.querySelector('#gif-toggle1');

    gifImage.addEventListener('mouseenter', () => {
        gifImage.src = gifImage.getAttribute('data-gif');
    });

    gifImage.addEventListener('mouseleave', () => {
        gifImage.src = gifImage.getAttribute('data-static');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const gifImage = document.querySelector('#gif-toggle2');

    gifImage.addEventListener('mouseenter', () => {
        gifImage.src = gifImage.getAttribute('data-gif');
    });

    gifImage.addEventListener('mouseleave', () => {
        gifImage.src = gifImage.getAttribute('data-static');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const gifImage = document.querySelector('#gif-toggle3');

    gifImage.addEventListener('mouseenter', () => {
        gifImage.src = gifImage.getAttribute('data-gif');
    });

    gifImage.addEventListener('mouseleave', () => {
        gifImage.src = gifImage.getAttribute('data-static');
    });
});

