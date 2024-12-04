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