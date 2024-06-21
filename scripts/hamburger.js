document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".menu-button");
    const closeButton = document.querySelector(".close-button");
    const mobileMenu = document.querySelector(".mobile-menu");

    menuButton.addEventListener("click", function() {
        mobileMenu.classList.add("active");
    });

    closeButton.addEventListener("click", function() {
        mobileMenu.classList.remove("active");
    });
});