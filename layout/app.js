document.addEventListener("DOMContentLoaded", function () {
  const firstButton = document.getElementById("firstButton");
  const secondButton = document.getElementById("secondButton");
  const firstDiv = document.getElementById("firstDiv");
  const secondDiv = document.getElementById("secondDiv");

  // Show the second div and hide the first div
  function showSecondDiv() {
    firstDiv.classList.add("hidden");
    firstButton.classList.remove("md:bg-red-500");
    secondDiv.classList.remove("hidden");
    firstButton.classList.add("md:bg-red-200");
    secondButton.classList.remove("md:bg-red-200");
    secondButton.classList.add("md:bg-red-500");
  }

  // Show the first div and hide the second div
  function showFirstDiv() {
    firstDiv.classList.remove("hidden");
    firstDiv.classList.remove("bg-red-200");
    secondDiv.classList.add("hidden");
    firstButton.classList.remove("md:bg-red-200");
    secondButton.classList.remove("md:bg-red-500");
    firstButton.classList.add("md:bg-red-500");
    secondButton.classList.add("md:bg-red-200");
  }

  // Add click event listeners to the pagination buttons
  firstButton.addEventListener("click", showFirstDiv);
  secondButton.addEventListener("click", showSecondDiv);
});

// show hamburger and search icon's svg
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

hamburgerBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  if (!mobileMenu.classList.contains("hidden")) {
    // Cancel icon SVG
    hamburgerBtn.innerHTML = `<svg
    class="fill-gray-400 w-4 h-4"
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
    data-testid="CloseIcon"
  >
    <path
      d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
    ></path>
  </svg>`;
  } else {
    // Hamburger menu icon SVG
    hamburgerBtn.innerHTML = `
    <svg
              class="w-4 h-4 fill-gray-400"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="MenuIcon"
            >
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg>
      `;
  }
});

// Display Search Cancel Icon when search icon is clicked
const searchIcon = document.getElementById("searchIcon");
const searchInput = document.getElementById("searchInput");
searchIcon.addEventListener("click", () => {
  searchInput.classList.toggle("hidden");
  if (!searchInput.classList.contains("hidden")) {
    searchIcon.innerHTML = `<svg
    class="fill-gray-400 w-4 h-4"
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
    data-testid="CloseIcon"
  >
    <path
      d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
    ></path>
  </svg>`;
  } else {
    searchIcon.innerHTML = `
    <svg
            class="text-lg w-4 h-4 fill-gray-400"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="SearchIcon"
          >
            <path
              d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            ></path>
          </svg>`;
  }
  searchInput.focus();
});

// Display Search Cancel Icon when search icon is clicked
const lgSearchIcon = document.getElementById("lgSearchIcon");
const lgSearchInput = document.getElementById("lgSearchInput");

lgSearchIcon.addEventListener("click", () => {
  lgSearchInput.classList.toggle("hidden");
  if (!searchInput.classList.contains("hidden")) {
    searchIcon.innerHTML = `<svg
    class="fill-gray-400 w-4 h-4"
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
    data-testid="CloseIcon"
  >
    <path
      d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
    ></path>
  </svg>`;
  } else {
    searchIcon.innerHTML = `
    <svg
            class="text-lg w-4 h-4 fill-gray-400"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="SearchIcon"
          >
            <path
              d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            ></path>
          </svg>`;
  }
  lgSearchInput.focus();
});

document.addEventListener("DOMContentLoaded", function () {
  const sliderContainer = document.querySelector(".slider-container");
  const sliderTrack = document.querySelector(".slider-track");
  const sliderItems = document.querySelectorAll(".slider-item");
  const prevButton = document.querySelector(".slider-prev");
  const nextButton = document.querySelector(".slider-next");
  const slideWidth = sliderItems[0].clientWidth;
  const numVisibleSlides = 4; // Change this value to set the number of visible slides
  let currentPosition = 0;

  // Move the slider track to the specified position
  function moveToPosition(position) {
    sliderTrack.style.transform = `translateX(${position}px)`;
  }

  // Move the slider to the next slide
  function nextSlide() {
    currentPosition -= slideWidth;
    if (
      currentPosition < -(slideWidth * (sliderItems.length - numVisibleSlides))
    ) {
      currentPosition = 0;
    }
    moveToPosition(currentPosition);
  }

  // Move the slider to the previous slide
  function prevSlide() {
    currentPosition += slideWidth;
    if (currentPosition > 0) {
      currentPosition = -(slideWidth * (sliderItems.length - numVisibleSlides));
    }
    moveToPosition(currentPosition);
  }

  // Attach click event listeners to the buttons
  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);
});
