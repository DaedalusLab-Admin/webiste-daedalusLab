import {
  loadAllHTMLSections,
  loadJSONAndUpdateContent,
} from "./index/loadHtml.js";
import { getLanguageFromPath, setLanguage } from "./index/lang.js";
import { initializeBurgerNavigation } from "./index/burger.js";
import { HTML_SECTIONS, HTML_CONTENT } from "./commons/htmlMaps.js";

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
  setTimeout(() => initializeBurgerNavigation(), 250); // Delay to match with content loading
};
