import { loadAllHTMLSections, loadJSONAndUpdateContent } from "./loadHtml.js";
import { getLanguageFromPath, setLanguage } from "../../commons/lang.js";
import { initializeBurgerNavigation } from "./burger.js";
import { HTML_SECTIONS, HTML_CONTENT } from "../../commons/htmlMaps.js";

// Run on window load
window.onload = () => {
  const lang = getLanguageFromPath();

  // Load HTML partials and corresponding localized text
  loadAllHTMLSections(HTML_SECTIONS);
  loadJSONAndUpdateContent(
    `./js/resources/languages/${lang}.json`,
    HTML_CONTENT
  );

  // Apply selected language styling after content is loaded
  setTimeout(() => setLanguage(lang), 250);
  // Initialize navigation behavior
  setTimeout(() => initializeBurgerNavigation(), 500); // Delay to match with content loading
};
