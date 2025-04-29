// Function to load an external HTML file into a target element
function loadHTML(targetId, filePath) {
  fetch(filePath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
      }
      return response.text();
    })
    .then((html) => {
      document.getElementById(targetId).innerHTML = html;
    })
    .catch((error) => {
      console.error(error);
    });
}

// Load html files
loadHTML("branding", "html/header/branding.html");
loadHTML("navigation", "html/header/navigation.html");

loadHTML("aboutUs", "html/main/aboutUs.html");
loadHTML("services", "html/main/services.html");
loadHTML("certifications", "html/main/certifications.html");
loadHTML("researchAndDevelopment", "html/main/researchAndDevelopment.html");

loadHTML("footerBranding", "html/footer/footerBranding.html");
loadHTML("contactUs", "html/footer/contactUs.html");
loadHTML("subFooter", "html/footer/subFooter.html");

// Function to update content dynamically
function updateContentFromJSON(contentData) {
  // Object mapping for content updates
  const elements = {
    // Navigation
    "nav-about-title": contentData.about.title,
    "nav-services-title": contentData.services.title,
    "nav-certifications-title": contentData.certifications.title,
    "nav-rnd-title": contentData.rnd.title,
    "nav-contacts-title": contentData.contacts.title,

    // About Us
    "about-title": contentData.about.title,
    "about-content": contentData.about.content,

    // Services
    "services-title": contentData.services.title,
    "services-subtitle": contentData.services.subtitle,
    "services-content": contentData.services.content,
    "green-software-title": contentData.services.greenSoftware.title,
    "green-software-content": contentData.services.greenSoftware.content,
    "cloud-title": contentData.services.cloud.title,
    "cloud-content": contentData.services.cloud.content,
    "mobile-web-title": contentData.services.mobileWeb.title,
    "mobile-web-content": contentData.services.mobileWeb.content,

    //Certifications
    "certifications-title": contentData.certifications.title,
    "certifications-content": contentData.certifications.content,

    // Research and Development
    "rnd-title": contentData.rnd.title,
    "rnd-subtitle": contentData.rnd.subtitle,
    "rnd-content": contentData.rnd.content,
    "rnd-link": contentData.rnd.link,

    // Contacts
    "contacts-title": contentData.contacts.title,
    "contacts-content": contentData.contacts.content,
  };

  // Update all elements dynamically using the object
  for (const [id, content] of Object.entries(elements)) {
    const element = document.getElementById(id);
    if (element) {
      element.innerHTML = content;
    }
  }
}

// Function to fetch JSON data and update content
function loadJSONAndUpdateContent() {
  const jsonFilePath = "../it.json"; // Path to your JSON file

  fetch(jsonFilePath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load JSON: ${response.statusText}`);
      }
      return response.json(); // Parse JSON
    })
    .then((data) => updateContentFromJSON(data))
    .catch((error) => {
      console.error("Error loading or processing the JSON file:", error);
    });
}

// Call the function to load JSON and update content when the page loads
window.onload = loadJSONAndUpdateContent;
