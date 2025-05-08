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

  footerBranding: "html/footer/branding.html",
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

export const HTML_CONTENT_LEGAL = {
  // Legal Info
  "legal-info-title": "legal.legalInfo.title",

  // Legal Info - Foundation
  "legal-foundation-date-place-label":
    "legal.legalInfo.foundation.datePlace.label",
  "legal-foundation-date-place": "legal.legalInfo.foundation.datePlace.value",
  "legal-foundation-notary-label": "legal.legalInfo.foundation.notary.label",
  "legal-foundation-notary": "legal.legalInfo.foundation.notary.value",
  "legal-foundation-headquarters-label":
    "legal.legalInfo.foundation.headquarters.label",
  "legal-foundation-headquarters":
    "legal.legalInfo.foundation.headquarters.value",

  // Legal Info - Objectives
  "legal-objectives-title": "legal.legalInfo.objectives.title",
  "legal-objectives-intro": "legal.legalInfo.objectives.intro",
  "legal-objectives-list": "legal.legalInfo.objectives.list",
  "legal-objectives-extra": "legal.legalInfo.objectives.extra",

  // Legal Info - R&D
  "legal-rnd-title": "legal.legalInfo.rnd.title",
  "legal-rnd-activity-label": "legal.legalInfo.rnd.activity",
  "legal-rnd-expenses-title": "legal.legalInfo.rnd.expensesTitle",
  "legal-rnd-expenses-list": "legal.legalInfo.rnd.expensesList",
  "legal-rnd-conclusion": "legal.legalInfo.rnd.conclusion",

  // Legal Info - Members
  "legal-members-title": "legal.legalInfo.members.title",
  "legal-member-serilli-name": "legal.legalInfo.members.serilli.name",
  "legal-member-serilli-items": "legal.legalInfo.members.serilli.items",
  "legal-member-formichetti-name": "legal.legalInfo.members.formichetti.name",
  "legal-member-formichetti-items": "legal.legalInfo.members.formichetti.items",
  "legal-member-tulli-name": "legal.legalInfo.members.tulli.name",
  "legal-member-tulli-items": "legal.legalInfo.members.tulli.items",

  // Legal Info - Additional
  "legal-additional-info-title": "legal.legalInfo.additional.title",
  "legal-participated-companies-label":
    "legal.legalInfo.additional.participatedCompanies.label",
  "legal-participated-companies-value":
    "legal.legalInfo.additional.participatedCompanies.value",
  "legal-professional-relations-label":
    "legal.legalInfo.additional.professionalRelations.label",
  "legal-professional-relations-value":
    "legal.legalInfo.additional.professionalRelations.value",
  "legal-last-financial-report-label":
    "legal.legalInfo.additional.lastFinancialReport.label",
  "legal-last-financial-report-value":
    "legal.legalInfo.additional.lastFinancialReport.value",
  "legal-ip-rights-label": "legal.legalInfo.additional.ipRights.label",
  "legal-ip-rights-value": "legal.legalInfo.additional.ipRights.value",
};
