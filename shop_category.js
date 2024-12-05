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


const filter_btn = document.getElementById("filter-btn");
const sort_btn = document.getElementById("sort-btn");
const close_menu_btn = document.getElementById("close-menu");
const close_sort_btn = document.getElementById("close-sort-btn");
const return_btn = document.getElementById("return-btn");
const product_type_return_btn = document.getElementById("product-type-return-btn");
console.log(product_type_return_btn);
const availability_btn = document.getElementById("availability-btn");
const product_type_btn = document.getElementById("product-type-btn");

const mobile_filter_menu = document.querySelector(".mobile-filter-menu");
const mobile_availability_menu = document.querySelector(".mobile-availability-menu");
const mobile_product_type_menu = document.querySelector(".mobile-product-type-menu");
const mobile_sort_menu = document.querySelector(".mobile-sort-menu");

filter_btn.addEventListener("click", () => {
    mobile_filter_menu.style.display = "block";
});

close_menu_btn.addEventListener("click", () => {
    mobile_filter_menu.style.display = "none";
});

availability_btn.addEventListener("click", () => {
    mobile_availability_menu.style.display = "block";
});

product_type_btn.addEventListener("click", () => {
    mobile_product_type_menu.style.display = "block";
});

return_btn.addEventListener("click", () => {
    mobile_availability_menu.style.display = "none";
});

product_type_return_btn.addEventListener("click", () => {
    mobile_product_type_menu.style.display = "none";
})

sort_btn.addEventListener("click", () => {
    mobile_sort_menu.style.display = "block";
});

close_sort_btn.addEventListener("click", () => {
    mobile_sort_menu.style.display = "none";
});
