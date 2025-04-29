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

  //TODO change flag to else
  setTimeout(() => {
    // Make sure lang-option exists and update it
    const selectedLang = document.getElementById("selected-lang-option");
    const nonSelectedLang = document.getElementById("lang-option");

    const otherLang = lang === "en" ? "it" : "en";

    selectedLang.classList.remove(otherLang);
    selectedLang.classList.add(lang); // 'it' or 'en'

    nonSelectedLang.href = `/${otherLang}`;
    nonSelectedLang.className = otherLang;
  }, "100");
};
