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
loadHTML("aboutUs", "html/aboutUs.html");
loadHTML("services", "html/services.html");
loadHTML("certifications", "html/certifications.html");
loadHTML("researcchAndDevelopment", "html/esearcchAndDevelopment.html");
loadHTML("footerBranding", "html/footer/footerBranding.html");
loadHTML("aboutUs", "html/footer/aboutUs.html");
