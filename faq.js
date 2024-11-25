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


// Scroll on card click
    function scrollToElement(targetClass) {
        const targetElement = document.querySelector(`.${targetClass}`);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    document.querySelectorAll('.card').forEach(button => {
        button.addEventListener('click', () => {
            const targetClass = button.dataset.scrollTarget;
            scrollToElement(targetClass);
        });
    });

// Scroll to top button
document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.getElementById('scrollToTop');
    function toggleScrollToTopButton() {
        if (window.scrollY > 800) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    }
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    window.addEventListener('scroll', toggleScrollToTopButton);
    scrollToTopButton.addEventListener('click', scrollToTop);
});