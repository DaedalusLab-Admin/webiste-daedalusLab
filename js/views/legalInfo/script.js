import { loadJSONAndUpdateContent } from "../index/loadHtml.js";
import { getLanguageFromPath } from "../../commons/lang.js";
import { HTML_CONTENT_LEGAL } from "../../commons/htmlMaps.js";

// Run on window load
window.onload = () => {
  const lang = getLanguageFromPath();
  // Load HTML partials and corresponding localized text
  loadJSONAndUpdateContent(
    `../js/resources/languages/${lang}.json`,
    HTML_CONTENT_LEGAL
  );
};
