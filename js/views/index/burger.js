/**
 * Initializes the burger menu navigation functionality.
 *
 * This function adds event listeners to the burger button, the navigation links,
 * and the document to control the opening and closing of the navigation menu.
 *
 *
 * @function initializeBurgerNavigation
 * @returns {void}
 */
export function initializeBurgerNavigation() {
  const burger = document.getElementById("burger");
  const navigation = document.getElementById("navigationNav");
  const navLinks = document.querySelectorAll(".navigation-nav a"); // Select all the links

  // Toggle the active class of the navigation when burger is clicked
  burger.addEventListener("click", (e) => {
    e.stopPropagation();
    navigation.classList.toggle("active");
  });

  // Close navigation if clicked outside of navigation and burger button
  document.addEventListener("click", (e) => {
    // Check if the click is outside of the navigation and burger button
    if (!navigation.contains(e.target) && !burger.contains(e.target)) {
      navigation.classList.remove("active");
    }
  });

  // Close navigation when a link inside the navigation is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("active");
    });
  });
}
