"use strict";

// Elements
const modal = document.querySelector(".modal");
const overlayModal = document.querySelector(".overlay-modal");
const btnOpenModal = document.querySelectorAll(".btn-open-modal");
const btnCloseModal = document.querySelector(".btn-close-modal");
const btnDropDown = document.querySelector(".dropdown");
const toggleDropDown = document.querySelector(".toggle-dropdown");
const nav = document.querySelector(".nav");

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
// Navbar fade animaition
const hoverHandler = function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav-link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing argument into handler
nav.addEventListener("mouseover", hoverHandler.bind(0.5));
nav.addEventListener("mouseout", hoverHandler.bind(1));

/***********************************************************/
// Sticky navigation
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add("fixed", "bg-[#fffffffa]");
  else nav.classList.remove("fixed", "bg-[#fffffffa]");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

/***********************************************************/
// Revealing sections
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});

/***********************************************************/
// Lazy loading images
const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("w-full", "blur-md");
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));

/***********************************************************/
//
