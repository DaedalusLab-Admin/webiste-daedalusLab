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
 * Redirects the user to the language path based on browser settings, preserving the current path
 */
function redirectToDefaultLanguage() {
  const defaultLang = getBrowserLanguage();
  const currentPath = window.location.pathname;

  // Remove the language prefix if it exists
  const pathWithoutLangPrefix = currentPath.replace(/^\/(en|it)\//, "/");

  // Redirect to the new path with the appropriate language prefix
  if (currentPath === "/") {
    window.location.replace(`/${defaultLang}`);
    return;
  }
  window.location.replace(`/${defaultLang}${pathWithoutLangPrefix}`);
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
      // Replace 'it' or 'en' in the href with the optionLang based on the current language
      option.href = option.href.replace(/\/(en|it)\//, `/${currentLang}/`);
    }
  });

  const langRefs = document.querySelectorAll(".lang-ref");
  langRefs.forEach((ref) => {
    // Replace 'it' or 'en' in the href with the optionLang based on the current language
    ref.href = ref.href.replace(/\/(en|it)\//, `/${currentLang}/`);
  });
}
