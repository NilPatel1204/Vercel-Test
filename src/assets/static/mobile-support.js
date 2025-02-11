document.querySelectorAll(".button-platform").forEach((button) => {
  button.addEventListener("click", () => {
    const platform = button.getAttribute("data-platform");
    const content = document.querySelector(
      `.platform-mobile-content[data-platform="${platform}"]`
    );

    // Check if the button is already active
    if (button.classList.contains("active-mobile-button")) {
      // If active, deactivate the button and hide its content
      button.classList.remove("active-mobile-button");
      content.style.display = "none";
    } else {
      // Remove 'active-mobile-button' class from all buttons
      document.querySelectorAll(".button-platform").forEach((btn) => {
        btn.classList.remove("active-mobile-button");
      });

      // Add 'active-mobile-button' class to the clicked button
      button.classList.add("active-mobile-button");

      // Hide all content
      document.querySelectorAll(".platform-mobile-content").forEach((content) => {
        content.style.display = "none";
      });

      // Show the content for the selected platform
      content.style.display = "grid";

      // Scroll to include both button and content
      button.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
});



// document.querySelectorAll(".button-platform").forEach((button) => {
//   button.addEventListener("click", () => {
//     // Remove 'active-mobile-button' class from all buttons
//     document.querySelectorAll(".button-platform").forEach((btn) => {
//       btn.classList.remove("active-mobile-button");
//     });

//     // Add 'active-mobile-button' class to the clicked button
//     button.classList.add("active-mobile-button");

//     // Hide all content
//     document.querySelectorAll(".platform-mobile-content").forEach((content) => {
//       content.style.display = "none";
//     });

//     // Show the content for the selected platform
//     const platform = button.getAttribute("data-platform");
//     document.querySelector(
//       `.platform-mobile-content[data-platform="${platform}"]`
//     ).style.display = "grid";
//   });
// });