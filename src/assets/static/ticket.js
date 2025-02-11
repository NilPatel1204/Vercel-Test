document.addEventListener("DOMContentLoaded", async function () {
  const api_URL = import.meta.env.PUBLIC_ApiUrl;
  const apiKey = import.meta.env.PUBLIC_ApiKey;
  const secretKey = import.meta.env.PUBLIC_SecretKey;

  const platformSelect = document.getElementById("platformSelect");
  const appSelect = document.getElementById("appSelect");

  // Fetch Platforms
  async function fetchPlatforms() {
    try {
      const response = await fetch(
        `${api_URL}/api/resource/Simprosys%20Post%20Category?filters=[["category_criteria", "=", "Platform"]]`,
        {
          method: "GET",
          headers: {
            Authorization: `token ${apiKey}:${secretKey}`,
          },
        }
      );
      const data = await response.json();
      if (data.data) {
        platformSelect.innerHTML += data.data
          .map(
            (platform) =>
              `<option value="${platform.name}">${platform.name}</option>`
          )
          .join("");
      }
    } catch (error) {
      console.error("Error fetching platforms:", error);
    }
  }

  // Fetch Apps based on selected Platform
  async function fetchApps(platform) {
    appSelect.innerHTML = `<option value="" disabled selected>Select App</option>`; // Reset Apps dropdown
    if (!platform) return;

    try {
      const response = await fetch(
        `${api_URL}/api/resource/Simprosys%20Post%20Category?filters=[["category_criteria", "=", "Category"],["parent_simprosys_post_category","=","${platform}"]]`,
        {
          method: "GET",
          headers: {
            Authorization: `token ${apiKey}:${secretKey}`,
          },
        }
      );
      const data = await response.json();
      if (data.data) {
        appSelect.innerHTML += data.data
          .map((app) => `<option value="${app.name}">${app.name}</option>`)
          .join("");
      }
    } catch (error) {
      console.error("Error fetching apps:", error);
    }
  }

  // Event Listener for Platform Change
  platformSelect.addEventListener("change", (e) => {
    fetchApps(e.target.value);
    platformSelect.querySelector("option[value='']").disabled = true; // Disable "Select Platform"
  });

  // Event Listener for App Change
  appSelect.addEventListener("change", () => {
    appSelect.querySelector("option[value='']").disabled = true; // Disable "Select App"
  });

  // Initial Fetch for Platforms
  fetchPlatforms();
});


// Submit 
document
  .getElementById("attach_file")
  .addEventListener("change", function (event) {
    const file = event.target.files[0]; // Get the first selected file
    if (file) {
      console.log("Selected File:", file.name); // Logs the file name
    }
  });

async function submitTicket(event) {
  event.preventDefault();

  const api_URL = import.meta.env.PUBLIC_ApiUrl;
  const apiKey = import.meta.env.PUBLIC_ApiKey;
  const secretKey = import.meta.env.PUBLIC_SecretKey;
  const fileInput = document.querySelector("#attach_file");

  let fileUrl = ""; // To store the uploaded file URL

  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];

    // Upload File First
    const uploadData = new FormData();
    uploadData.append("file", file);
    uploadData.append("is_private", 0); // 1 for private file, 0 for public

    try {
      const uploadResponse = await fetch(`${api_URL}/api/method/upload_file`, {
        method: "POST",
        headers: {
          Authorization: `token ${apiKey}:${secretKey}`,
        },
        body: uploadData,
      });

      const uploadResult = await uploadResponse.json();
      if (uploadResponse.ok && uploadResult.message.file_url) {
        fileUrl = uploadResult.message.file_url; // Get the uploaded file URL
      } else {
        alert(
          "File upload failed: " +
            (uploadResult.message.error || "Unknown error")
        );
        return;
      }
    } catch (error) {
      console.error("File upload error:", error);
      alert("File upload failed!");
      return;
    }
  }

  // Now Submit the Form with File URL
  const formData = {
    name1: document.querySelector("#name1").value,
    company_name: document.querySelector("#company_name").value,
    email: document.querySelector("#email").value,
    plugin_or_app_related_queries: document.querySelector(
      "#plugin_or_app_related_queries"
    ).value,
    platform: document.querySelector("#platformSelect").value,
    app: document.querySelector("#appSelect").value,
    store_id: document.querySelector("#store_id").value,
    additional_details: document.querySelector("#message").value,
    attach_file: fileUrl, // Store the uploaded file URL instead of fakepath
  };

  try {
    const response = await fetch(
      `${api_URL}/api/resource/Support%20Simprosys%20Ticket`,
      {
        method: "POST",
        headers: {
          Authorization: `token ${apiKey}:${secretKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const result = await response.json();

    if (response.ok) {
      alert("Ticket created successfully!");
    } else {
      alert("Error: " + result.error);
    }
  } catch (error) {
    console.error("Form submission error:", error);
    alert("Failed to submit ticket!");
  }
}

window.submitTicket = submitTicket;
