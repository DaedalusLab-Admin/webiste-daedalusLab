import { loadAllHTMLSections, loadJSONAndUpdateContent } from "./loadHtml.js";
import {
  getLanguageFromPath,
  setLanguage as setSelectedLanguage,
} from "./lang.js";

// Run on window load
window.onload = () => {
  const lang = getLanguageFromPath();

  // Load HTML partials and corresponding localized text
  loadAllHTMLSections();
  loadJSONAndUpdateContent(`./js/resources/languages/${lang}.json`);

  // Apply selected language styling after content is loaded
  setTimeout(() => setSelectedLanguage(lang), 200);
};
