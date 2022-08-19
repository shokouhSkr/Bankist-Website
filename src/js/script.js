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
// Tabbed component
const tabsContainer = document.querySelector(".tabs-container");
const operationsContent = document.querySelectorAll(".operations-content");

tabsContainer.addEventListener("click", function (e) {
  e.preventDefault();

  const clicked = e.target.closest(".tabs");
  // console.log(clicked);

  if (!clicked) return;

  // Remove active content
  operationsContent.forEach((el) => el.classList.add("hidden"));
  operationsContent.forEach((el) => el.classList.remove("grid"));

  // Show active content
  document.querySelector(`.operation-content-${clicked.dataset.tab}`).classList.add("grid");
  document.querySelector(`.operation-content-${clicked.dataset.tab}`).classList.remove("hidden");
});
/***********************************************************/
//

/***********************************************************/
//

/***********************************************************/
//
