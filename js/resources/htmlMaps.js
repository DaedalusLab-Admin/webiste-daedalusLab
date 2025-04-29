/**
 * An object that maps section names to their corresponding HTML file paths.
 *
 * This object is used to load HTML content into the page dynamically based on
 * the section mappings.
 *
 * @constant
 * @type {Object}
 */
export const HTML_SECTIONS = {
  branding: "html/header/branding.html",
  navigation: "html/header/navigation.html",

  aboutUs: "html/main/aboutUs.html",
  services: "html/main/services.html",
  certifications: "html/main/certifications.html",
  researchAndDevelopment: "html/main/researchAndDevelopment.html",

  footerBranding: "html/footer/footerBranding.html",
  contactUs: "html/footer/contactUs.html",
  subFooter: "html/footer/subFooter.html",
};

/**
 * An object that maps HTML element IDs to specific paths within the JSON content
 * object.
 *
 * This object is used to map HTML elements to their respective content in the
 * JSON data, allowing dynamic content updates on the webpage.
 *
 * @constant
 * @type {Object}
 */
export const HTML_CONTENT = {
  // Navigation
  "nav-about-title": "about.title",
  "nav-services-title": "services.title",
  "nav-certifications-title": "certifications.title",
  "nav-rnd-title": "rnd.title",
  "nav-contacts-title": "contacts.title",

  // About Us
  "about-title": "about.title",
  "about-content": "about.content",

  // Services
  "services-title": "services.title",
  "services-subtitle": "services.subtitle",
  "services-content": "services.content",
  "green-software-title": "services.greenSoftware.title",
  "green-software-content": "services.greenSoftware.content",
  "cloud-title": "services.cloud.title",
  "cloud-content": "services.cloud.content",
  "mobile-web-title": "services.mobileWeb.title",
  "mobile-web-content": "services.mobileWeb.content",

  // Certifications
  "certifications-title": "certifications.title",
  "certifications-content": "certifications.content",

  // Research and Development
  "rnd-title": "rnd.title",
  "rnd-subtitle": "rnd.subtitle",
  "rnd-content": "rnd.content",
  "rnd-link": "rnd.link",

  // Contacts
  "contacts-title": "contacts.title",
  "contacts-content": "contacts.content",
};
