/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables

*/
const allSections = document.querySelectorAll('section');
const navigationMenu = document.getElementById('navbar__list');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

    function isElementInView(element) {
        const ClientRect = element.getBoundingClientRect();
        return (
        ClientRect.top >= 0 &&
        ClientRect.left >= 0 &&
        ClientRect.right <= (window.innerWidth || document.documentElement.clientWidth)&&
        ClientRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) 
        );
    }
    

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
    allSections.forEach(section => {
        const menuItem = document.createElement('li');
        const menuLink = document.createElement('a');
        menuLink.textContent = section.getAttribute('data-nav');
        menuLink.setAttribute('href', `#${section.id}`);
        menuLink.classList.add('menu__link');
        menuItem.appendChild(menuLink);
        navigationMenu.appendChild(menuItem);
    });
        
// Add class 'active' to section when near top of viewport
function activateSection() {
    allSections.forEach(section => {
        const boxes = section.getBoundingClientRect();
        if (boxes.top <= 150 && boxes.bottom >= 150) {
            section.classList.add('your-active-class');
            document.querySelector(`a[href="#${section.id}"]`).classList.add('active');
        } else {
            section.classList.remove('your-active-class');
            document.querySelector(`a[href="#${section.id}"]`).classList.remove('active');
        }
    });
}

// Scroll to anchor ID using scrollTO event
function navigateToSection() {
    document.querySelectorAll('.menu__link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = document.querySelector(link.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
}


/**
 * End Main Functions
    * Begin Events
    * 
    */

    // Build menu 

// Scroll to section on link click
navigateToSection();

// Set sections as active

document.addEventListener('scroll', () => {
    activateSection();
});