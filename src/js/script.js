"use strict";

// Elements
const modal = document.querySelector(".modal");
const overlayModal = document.querySelector(".overlay-modal");
const btnOpenModal = document.querySelectorAll(".btn-open-modal");
const btnCloseModal = document.querySelector(".btn-close-modal");
const btnDropDown = document.querySelector(".dropdown");
const toggleDropDown = document.querySelector(".toggle-dropdown");

const btnScrollTo = document.querySelector(".btn-scroll-to");
const featuresSection = document.querySelector("#features-section");

/***********************************************************/
// Modal window
const openModal = function (e) {
  e.preventDefault();

  modal.classList.remove("hidden");
  overlayModal.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlayModal.classList.add("hidden");
};

btnOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlayModal.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

/***********************************************************/
// Hamburger menu
btnDropDown.addEventListener("click", function (e) {
  e.preventDefault();

  toggleDropDown.classList.toggle("hidden");
});

/***********************************************************/
// Button scrolling
btnScrollTo.addEventListener("click", function (e) {
  e.preventDefault();

  featuresSection.scrollIntoView({ behavior: "smooth" });
});

/***********************************************************/
// Page navigation
document.querySelectorAll(".nav-link").forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const id = this.getAttribute("href");
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

/***********************************************************/
//

/***********************************************************/
//

/***********************************************************/
//

/***********************************************************/
//
