import { loadAllHTMLSections, loadJSONAndUpdateContent } from "./loadHtml.js";

function toggleBurgerMenu() {
  document.getElementById("burger").classList.toggle("active");
  document.getElementById("navigationNav").classList.toggle("active");
}

window.onload = function () {
  // Get the current language from the URL
  const pathSegments = window.location.pathname.split("/");

  // Detect preferred language from user agent
  const browserLang = navigator.language || navigator.userLanguage; // e.g., 'it-IT', 'en-US'
  const defaultLang = browserLang.startsWith("en") ? "en" : "it";

  // Check if URL contains a language segment
  let lang;
  if (pathSegments.includes("en")) {
    lang = "en";
  } else if (pathSegments.includes("it")) {
    lang = "it";
  } else {
    // No language in URL — redirect to default
    window.location.replace(`/${defaultLang}`);
    return; // Stop further execution
  }

  // Load HTML components
  loadAllHTMLSections();
  // Load HTML content from JSON based on language
  loadJSONAndUpdateContent(`./js/resources/languages/${lang}.json`);

  setTimeout(() => {
    const langOptions = document.querySelectorAll(".lang-option");
    langOptions.forEach((option) => {
      const optionLang = option.classList.contains("it") ? "it" : "en";
      console.log(optionLang);

      if (optionLang === lang) {
        option.classList.add("selected-lang");
        // Disable link and animation for selected lang
        option.classList.remove("underline-animation");
        option.removeAttribute("href");
      } else {
        option.classList.remove("selected-lang");
        // Ensure link points to the alternative lang
        option.href = `/${optionLang}`;
      }
    });
  }, 1000);
};
