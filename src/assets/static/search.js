// Debounce function to optimize API calls
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

const api_url = import.meta.env.PUBLIC_ApiUrl;

// Function to fetch search results
async function fetchSearchResults(keyword) {
  const resultsContainer = document.getElementById("searchResults");

  // if (keyword.length < 3) {
  //   document.getElementById("searchResults").innerHTML = ""; // Clear results if input is too short
  //   return;
  // }
  try {
    const response = await fetch(
      `${api_url}/api/method/support_simprosys.support_simprosys.api.search_blog?keyword=${keyword}`,
      {
        method: "GET",
        headers: {
          Authorization: `token ${import.meta.env.PUBLIC_ApiKey}:${
            import.meta.env.PUBLIC_SecretKey
          }`, // API authorization token
        },
        mode: "cors",
      }
    );
    const dataJson = await response.json();
    const blogArray = dataJson.message || []; // Default to an empty array if undefined

    resultsContainer.innerHTML = ""; // Clear old results

    if (blogArray.length > 0) {
      const wrapperDiv = document.createElement("div"); // Create a wrapper div
      wrapperDiv.className =
        "rounded-t-2xl rounded-b-2xl shadow-md bg-white max-h-80 overflow-y-auto"; // Add class for styling if needed

      blogArray.forEach((blog) => {
        const resultItem = document.createElement("a");
        resultItem.href = `/faq/${blog.slug}`; // Assuming each blog has a slug
        resultItem.className =
          "flex p-4 sm:p-5 gap-3 bg-white hover:bg-slate-100 hover:rounded-2xl border-b";
        resultItem.innerHTML = `
              <img src="/searchNote.svg" alt="noteIcon" />
              <div class="text-start">
                <p class="text-sm sm:text-base text-[#25282B]">
                  ${highlightKeyword(blog.blog_title, keyword)}
                </p>
                <p class="text-[#25282B] text-xs sm:text-sm opacity-70">
                  ${blog.post_category || "Unknown Category"}
                </p>
              </div>`;

        wrapperDiv.appendChild(resultItem);
      });
      resultsContainer.appendChild(wrapperDiv);

      resultsContainer.classList.remove("hidden"); // Show results
    } else {
      resultsContainer.classList.add("hidden"); // Hide if no results
    }
  } catch (error) {
    console.error("Error fetching search results:", error);
  }
}

// Function to highlight the searched keyword
function highlightKeyword(text, keyword) {
  const regex = new RegExp(`(${keyword})`, "gi");
  return text.replace(regex, `<span class="bg-[#FFF8D1]">$1</span>`);
}

// Add event listener with debounce
document.getElementById("searchInput").addEventListener(
  "input",
  debounce((event) => {
    fetchSearchResults(event.target.value);
  }, 150)
);
// Add event listener with debounce
document.getElementById("searchInput").addEventListener(
  "focus", // Use 'focus' instead of 'onFocus'
  ()=>{
    fetchSearchResults(event.target.value);
    console.log("first");
  }
);


// Used for search Keyword

// Get all the links
const linkItems = document.querySelectorAll(".link-item");
const searchInput = document.getElementById("searchInput");

// Add click event listener to each link
linkItems.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Set the content of the clicked link into the search input
    searchInput.value = event.target.textContent.trim();

    // Focus on the search input and move the cursor to the end
    searchInput.focus();
    searchInput.setSelectionRange(
      searchInput.value.length,
      searchInput.value.length
    );

    // Trigger the search immediately after clicking
    triggerSearch(searchInput.value);
  });
});

// Function to simulate the search functionality
function triggerSearch(query) {
  // Optionally, you can make an API call, filter the results, etc.
  fetchSearchResults(query); // Trigger the search function
}
