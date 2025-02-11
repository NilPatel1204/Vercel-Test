// For Navbar

// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (
//     document.body.scrollTop > 300 ||
//     document.documentElement.scrollTop > 300
//   ) {
//     document.getElementById("header").style.position = "fixed";
//     document.getElementById("header").style.top = "0px";
//     document.getElementById("header").style.animationName = "nav-animation";
//   } else {
//     document.getElementById("header").style.position = "initial";
//     document.getElementById("header").style.animationName = "fad-1";
//   }
// }


// For Dropdown
// document.addEventListener("DOMContentLoaded", function () {
//     const dropdowns = document.querySelectorAll(".dropdown");
//     let activeDropdown = null; // Track the currently open dropdown

//     dropdowns.forEach((dropdown) => {
//         const toggleButton = dropdown.querySelector(".toggle-button");
//         const toggleSection = dropdown.nextElementSibling;
//         const arrowIcon = dropdown.querySelector(".arrow-icon");

//         toggleButton.addEventListener("click", function () {
//             // Close any previously open dropdowns
//             if (activeDropdown && activeDropdown !== toggleSection) {
//                 activeDropdown.classList.add("hidden"); // Close the previous dropdown
//                 const activeArrowIcon = activeDropdown.previousElementSibling.querySelector(".arrow-icon");
//                 activeArrowIcon.classList.remove("rotate"); // Reset rotation of the arrow
//                 activeDropdown = null;
//             }

//             // Toggle the current dropdown
//             const isHidden = toggleSection.classList.contains("hidden");
//             toggleSection.classList.toggle("hidden", !isHidden); // Show/Hide the dropdown
//             arrowIcon.classList.toggle("rotate", isHidden); // Rotate if open, reset if closed

//             // Update the active dropdown
//             activeDropdown = isHidden ? toggleSection : null;
//         });
//     });
// });


// Integration List dropdown
document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");
  let activeDropdown = null; // Track the currently open dropdown

  dropdowns.forEach((dropdown, index) => {
    const toggleSection = dropdown.nextElementSibling;
    const arrowIcon = dropdown.querySelector(".arrow-icon");

    // Open the first dropdown by default
    if (index === 0) {
      toggleSection.classList.remove("hidden"); // Show the first dropdown
      arrowIcon.classList.add("rotate"); // Rotate the arrow for the first dropdown
      activeDropdown = toggleSection; // Set it as the active dropdown
    }

    // Add the click event listener to the entire dropdown div
    dropdown.addEventListener("click", function () {
      // Close any previously open dropdowns
      if (activeDropdown && activeDropdown !== toggleSection) {
        activeDropdown.classList.add("hidden"); // Close the previous dropdown
        const activeArrowIcon =
          activeDropdown.previousElementSibling.querySelector(".arrow-icon");
        activeArrowIcon.classList.remove("rotate"); // Reset rotation of the arrow
        activeDropdown = null;
      }

      // Toggle the current dropdown
      const isHidden = toggleSection.classList.contains("hidden");
      toggleSection.classList.toggle("hidden", !isHidden); // Show/Hide the dropdown
      arrowIcon.classList.toggle("rotate", isHidden); // Rotate if open, reset if closed

      // Update the active dropdown
      activeDropdown = isHidden ? toggleSection : null;
    });
  });
});



// Blog Dropdown
document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown-details"); // Select all dropdown triggers
  let activeDropdown = null; // Track the currently open dropdown

  dropdowns.forEach((dropdown) => {
    const toggleSection = dropdown.nextElementSibling; // The section to toggle (the next sibling)
    const arrowIcon = dropdown.querySelector(".arrow-icon");

    // Check if any active link exists (based on the activeSlug class)
    const activeLink = toggleSection.querySelector(".activeClass");

    if (activeLink) {
      // If an active link exists, open the corresponding dropdown
      toggleSection.classList.remove("hidden");
      arrowIcon.classList.add("rotate");
      activeDropdown = toggleSection;
    }

    // Add a click event listener for each dropdown
    dropdown.addEventListener("click", function () {
      // If there is an active dropdown and it's not the current one, close it
      if (activeDropdown && activeDropdown !== toggleSection) {
        activeDropdown.classList.add("hidden"); // Hide the previously opened dropdown
        const activeArrowIcon =
          activeDropdown.previousElementSibling.querySelector(".arrow-icon");
        activeArrowIcon.classList.remove("rotate"); // Reset the arrow rotation
      }

      // Toggle the current dropdown
      const isCurrentlyHidden = toggleSection.classList.contains("hidden");

      if (isCurrentlyHidden) {
        toggleSection.classList.remove("hidden"); // Show the dropdown
        arrowIcon.classList.add("rotate"); // Rotate the arrow
        activeDropdown = toggleSection; // Set the current dropdown as active
      } else {
        toggleSection.classList.add("hidden"); // Hide the dropdown
        arrowIcon.classList.remove("rotate"); // Reset the arrow rotation
        activeDropdown = null; // Reset active dropdown
      }
    });
  });
});




document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    // Show search results when the input is focused
    searchInput.addEventListener('focus', function() {
        searchResults.classList.remove('hidden'); // Show the results block
    });

    // Hide search results when the input loses focus
    searchInput.addEventListener('blur', function() {
        // Delay hiding to allow clicks inside the results to work
        setTimeout(function() {
            if (!searchResults.contains(document.activeElement)) {
                searchResults.classList.add('hidden'); // Hide the results block
            }
        }, 100);
    });
});