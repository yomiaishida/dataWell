document.addEventListener("DOMContentLoaded", function () {
  // show hamburger and search icon's svg
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const sectionsToHide = document.querySelectorAll(".hide-on-mobile-nav");

  // Get all mobile menu links
  const mobileMenuLinks = document.querySelectorAll("#mobileMenu a");

  // // Add event listener to each mobile menu link
  // mobileMenuLinks.forEach((link) => {
  //   link.addEventListener("click", function (event) {
  //     // Close the mobile menu when a link is clicked
  //     mobileMenu.classList.add("hidden");

  //     // Hide the sections when a link is clicked (optional)
  //     sectionsToHide.forEach((section) => {
  //       section.classList.add("hidden");
  //     });

  //     // Prevent the default link behavior to allow routing to the correct address
  //     event.preventDefault();

  //     // Get the href attribute from the clicked link
  //     const href = link.getAttribute("href");

  //     // Route to the correct address
  //     window.location.href = href;
  //   });
  // });

  if (!mobileMenu.classList.contains("hidden")) {
    // Add tailwind class to hide other sections
    sectionsToHide.forEach((section) => {
      section.classList.add("hidden");
    });
  } else {
    // Remove tailwind class that hides other section
    sectionsToHide.forEach((section) => {
      section.classList.remove("hidden");
    });
  }

  hamburgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    if (!mobileMenu.classList.contains("hidden")) {
      // Add tailwind class to hide other sections
      sectionsToHide.forEach((section) => {
        section.classList.add("hidden");
      });

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
      // Toggle the visibility of the sections to hide
      sectionsToHide.forEach((section) => {
        section.classList.remove("hidden");
      });

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

  // function hideNavigationMenu() {
  //   // Hide the mobile menu
  //   const mobileMenu = document.getElementById("mobileMenu");
  //   mobileMenu.classList.add("hidden");

  //   // Hide the sections to hide (optional)
  //   const sectionsToHide = document.querySelectorAll(".hide-on-mobile-nav");
  //   sectionsToHide.forEach((section) => {
  //     section.classList.add("hidden");
  //   });

  //   console.log(sectionsToHide);
  //   console.log(mobileMenu);
  // }
});

// Add an event listener to the window object to detect page unload (navigation to another page)
// window.addEventListener("beforeunload", hideNavigationMenu);

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

// Display Search Cancel Icon when search icon is clicked on Large Screens
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
