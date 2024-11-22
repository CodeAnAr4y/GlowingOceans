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