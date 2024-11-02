// Select Overly element
// Select modal element
// Select modal open button element
// Select modal close button element

// Add Animation class to overlay and modal when open button clicked
// Remove Animation class from overlay and modal when close button clicked

// Select overlay element
const overlay = document.querySelector(".overlay");

// Select modal element
const modal = document.querySelector(".modal");

// Select modal open button element
const openButton = document.querySelectorAll("#open-modal-button");

// Select modal close button element
const closeButton = document.querySelector("#close-modal-button");

// Add animation class to overlay and modal when open button is clicked
openButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    overlay.classList.add("show-overlay-animation");
    modal.classList.add("show-modal-animation");
    overlay.classList.remove("hide-overlay-animation");
    modal.classList.remove("hide-modal-animation");
  });
});

// Remove animation class from overlay and modal when close button is clicked
closeButton.addEventListener("click", () => {
  overlay.classList.add("hide-overlay-animation");
  modal.classList.add("hide-modal-animation");
  overlay.classList.remove("show-overlay-animation");
  modal.classList.remove("show-modal-animation");
});
