 // Import Swiper
// import Swiper from "swiper";

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   freeMode: true,
//   cssMode: true,
//   autoplay: true,
//   loop: true,
//   navigation: {
//     nextEl: ".slide-next",
//     prevEl: ".slide-prev",
//   },
//   breakpoints: {
//     0: {
//       slidesPerView: 1, // Small screens
//     },
//     768: {
//       // Medium screens (md)
//       slidesPerView: 2,
//       spaceBetween: 24, // Optional spacing
//     },
//     1280: {
//       // Large screens
//       slidesPerView: 3,
//       spaceBetween: 24, // Optional spacing
//     },
//   },
// });

// For Active Class
document.addEventListener("DOMContentLoaded", function () {
  // Activate Shopify by default
  const defaultPlatform = "Shopify";
  const defaultButton = document.querySelector(
    `.platform-btn[data-platform="${defaultPlatform}"]`
  );
  const platformContent = document.querySelector(
    `.platform-content[data-platform="${defaultPlatform}"]`
  );

  // Ensure default platform button has active class
  if (defaultButton) {
    defaultButton.classList.add("active-button");
  }

  // Ensure default platform content is shown
  if (platformContent) {
    platformContent.style.display = "grid";
  }

  // Event listener for platform buttons
  document.querySelectorAll(".platform-btn").forEach((button) => {
    button.addEventListener("click", () => {
      // Remove 'active-button' from all buttons
      document.querySelectorAll(".platform-btn").forEach((btn) => {
        btn.classList.remove("active-button");
      });

      // Add 'active-button' class to the clicked button
      button.classList.add("active-button");

      // Hide all platform content
      document.querySelectorAll(".platform-content").forEach((content) => {
        content.style.display = "none";
      });

      // Show content for the selected platform
      const platform = button.getAttribute("data-platform");
      const selectedPlatformContent = document.querySelector(
        `.platform-content[data-platform="${platform}"]`
      );

      if (selectedPlatformContent) {
        selectedPlatformContent.style.display = "grid";
      }
    });
  });
});
