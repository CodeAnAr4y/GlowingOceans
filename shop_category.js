const filter_btn = document.getElementById("filter-btn");
const sort_btn = document.getElementById("sort-btn");
const close_menu_btn = document.getElementById("close-menu");
const close_sort_btn = document.getElementById("close-sort-btn");
const return_btn = document.getElementById("return-btn");
const availability_btn = document.getElementById("availability-btn");
const product_type_btn = document.getElementById("product-type-btn");

const mobile_filter_menu = document.querySelector(".mobile-filter-menu");
const mobile_availability_menu = document.querySelector(".mobile-availability-menu");
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

return_btn.addEventListener("click", () => {
    mobile_availability_menu.style.display = "none";
});

sort_btn.addEventListener("click", () => {
    mobile_sort_menu.style.display = "block";
});

close_sort_btn.addEventListener("click", () => {
    mobile_sort_menu.style.display = "none";
});
