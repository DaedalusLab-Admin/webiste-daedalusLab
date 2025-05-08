import { getLanguageFromPath } from "./commons/lang.js";

// Run on window load
// * Sript to be applied in each html view
window.onload = () => {
  // Set the <html> element language
  const lang = getLanguageFromPath();
  document.documentElement.lang = lang;
};
