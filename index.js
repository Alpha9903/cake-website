
const searchIcon = document.querySelector(".search");
const searchForm = document.querySelector(".search-form");

searchIcon.addEventListener("click", () => {
    searchForm.classList.add("active");
    cartItemsContainer.classList.remove("active");
    });

const cartIcon = document.querySelector(".cart");
const cartItemsContainer = document.querySelector(".cart-item-container");
    
cartIcon.addEventListener("click", () => {
    cartItemsContainer.classList.add("active");
   searchForm.classList.remove("active");
    });