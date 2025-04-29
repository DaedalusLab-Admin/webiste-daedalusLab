import { HTML_SECTIONS, HTML_CONTENT } from "./resources/htmlMaps.js";

/**
 * Loads an external HTML file into a target element by fetching the file
 * and inserting its content into the specified element in the DOM.
 *
 * @param {string} targetId - The ID of the target DOM element where the HTML
 * content should be inserted.
 * @param {string} filePath - The path to the external HTML file to be loaded.
 */
function loadHTML(targetId, filePath) {
  fetch(filePath)
    .then((response) => {
      // Check if the response is OK (status code 200)
      if (!response.ok) {
        throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
      }
      return response.text(); // Parse response as text
    })
    .then((html) => {
      // Insert the fetched HTML content into the target element
      document.getElementById(targetId).innerHTML = html;
    })
    .catch((error) => {
      console.error(error); // Log any errors during the fetch process
    });
}

/**
 * Loads multiple HTML files into their respective target elements in the DOM.
 */
export function loadAllHTMLSections() {
  for (const [targetId, filePath] of Object.entries(HTML_SECTIONS)) {
    loadHTML(targetId, filePath); // Load each HTML section into the DOM
  }
}

/**
 * Updates the content of DOM elements dynamically by accessing data in the
 * provided JSON object based on the mapping in 'HTML_CONTENT'
 *
 * @param {Object} contentData - The JSON data object that contains the dynamic
 * content.
 */
function updateContentFromJSON(contentData) {
  // Iterate over the mapping to update elements
  for (const [id, path] of Object.entries(HTML_CONTENT)) {
    const element = document.getElementById(id);
    if (element) {
      // Traverse the nested path to access the content in contentData
      const keys = path.split("."); // Split the path string into keys
      let value = contentData;

      // Traverse through the path and access the value
      for (const key of keys) {
        value = value[key];
      }

      // Set the content of the element
      element.innerHTML = value;
    }
  }
}

/**
 * Fetches a JSON file from the provided path and updates the content of the
 * webpage based on the data in it
 *
 * @param {string} jsonFilePath - The path to the JSON file
 */
export function loadJSONAndUpdateContent(jsonFilePath) {
  fetch(jsonFilePath)
    .then((response) => {
      // Check if the JSON file was successfully loaded
      if (!response.ok) {
        throw new Error(`Failed to load JSON: ${response.statusText}`);
      }
      // Parse the response as JSON
      return response.json();
    })
    .then((data) => updateContentFromJSON(data, HTML_CONTENT)) // Update content with JSON data
    .catch((error) => {
      console.error("Error loading or processing the JSON file:", error);
    });
}
