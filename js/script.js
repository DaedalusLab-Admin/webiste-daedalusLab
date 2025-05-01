import { loadAllHTMLSections, loadJSONAndUpdateContent } from "./loadHtml.js";
import { getLanguageFromPath, setLanguage } from "./lang.js";
import { initializeBurgerNavigation } from "./burger.js";

// Run on window load
window.onload = () => {
  const lang = getLanguageFromPath();

  // Load HTML partials and corresponding localized text
  loadAllHTMLSections();
  loadJSONAndUpdateContent(`./js/resources/languages/${lang}.json`);

  // Apply selected language styling after content is loaded
  setTimeout(() => setLanguage(lang), 200);
  // Initialize navigation behavior
  setTimeout(() => initializeBurgerNavigation(), 200); // Delay to match with content loading
};
