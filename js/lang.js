/**
 * Determines the default language based on the user's browser settings
 *
 * @returns {string} - The default language code.
 */
function getBrowserLanguage() {
  const browserLang = navigator.language || navigator.userLanguage || "en";
  return browserLang.startsWith("en") ? "en" : "it";
}

/**
 * Redirects the user to the language path based on browser settings
 */
function redirectToDefaultLanguage() {
  const defaultLang = getBrowserLanguage();
  window.location.replace(`/${defaultLang}`);
}

/**
 * Extracts the language code from the current URL path, or redirects to the default language
 *
 * @returns {string|null} - The detected language, or null if redirected
 */
export function getLanguageFromPath() {
  const pathSegments = window.location.pathname.split("/");
  if (pathSegments.includes("en")) return "en";
  if (pathSegments.includes("it")) return "it";

  redirectToDefaultLanguage();

  return null;
}

/**
 * Updates the HTML for the selected language
 *
 * @param {string} currentLang - The language currently selected
 */
export function setLanguage(currentLang) {
  const langOptions = document.querySelectorAll(".lang-option");

  langOptions.forEach((option) => {
    const optionLang = option.classList.contains("it") ? "it" : "en";
    const isSelected = optionLang === currentLang;

    // Toggle styles and hrefs based on selected language
    option.classList.toggle("selected-lang", isSelected);
    option.classList.toggle("underline-animation", !isSelected);

    if (isSelected) {
      option.removeAttribute("href");
    } else {
      option.href = `/${optionLang}`;
    }
  });
}
