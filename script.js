let currentSection = null;
const imageUrls = [
    './images/Group 29.png',
    './images/kontakt.png',
    './images/kontaktGrad.png',
    './images/Logo.png',
    './images/LogoGrad.png',
    './images/meist.png',
    './images/meistGrad.png',
    './images/projektid.png',
    './images/projektidGrad.png',
    // Add any other images you want to preload
];

function preloadImages(urls) {
    urls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

window.onload = function() {
    preloadImages(imageUrls);
};

function resetPage() {
    // Capture the scroll position before any changes
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    console.log('Current scroll position:', currentScrollPosition);

    if (window.innerWidth <= 768) {
        // Screen width is less than or equal to 768px
        // Start the scroll animation before DOM updates
        scrollToTop(250, currentScrollPosition, () => {
            // Perform DOM updates after scrolling completes
            performDOMUpdates();
        });
    } else {
        // Screen width is greater than 768px
        // Perform DOM updates immediately without scrolling
        performDOMUpdates();
    }
}
function performDOMUpdates() {
    hideAllSections();

    const gradientBarElement = document.getElementById('gradient-bar');
    gradientBarElement.style.display = 'block';
    document.body.style.alignContent = 'flex-start';

    let navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.classList.remove('hidden', 'active');

        // Make sure hidden buttons are made visible again
        button.style.opacity = '1';
        button.style.maxHeight = '20vh'; // Restore original max-height
        button.style.display = 'block'; // Ensure the buttons are displayed

        let paragraph = button.querySelector('p');
        paragraph.style.visibility = 'visible';
        paragraph.style.display = ''; // Restore paragraph display if needed
    });

    const navContainer = document.querySelector('.nav-container');
    navContainer.style.justifyContent = '';
    navContainer.style.gap = window.innerWidth <= 768 ? '5vh' : '8vw';

    currentSection = null;
}







function hideAllSections() {
    // Hide all content sections
    document.getElementById('meist-content').style.display = 'none';
    document.getElementById('projektid-content').style.display = 'none';
    document.getElementById('kontakt-content').style.display = 'none';

    // Remove 'active' class from all nav-buttons
    let navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.classList.remove('active');
    });
}



function showMeist() {
    if (currentSection === 'meist') {
        resetPage(); // If the same section is clicked, reset the page
    } else {
        hideAllSections();
        document.getElementById('meist-content').style.display = 'block';
        // Add 'active' class instead of changing 'src'
        document.getElementById('meist-btn').classList.add('active');
        document.getElementById('gradient-bar').style.display = 'none';
        document.body.style.alignContent = 'flex-start';
        currentSection = 'meist'; // Set current section to "meist"
        showActiveText('meist-btn');
        hideOtherImagesMobile('meist-btn'); // Hide other images only for mobile devices
        scrollToSectionOnMobile('meist-content'); 
    }
}


function showProjektid() {
    if (currentSection === 'projektid') {
        resetPage();
    } else {
        hideAllSections();
        document.getElementById('projektid-content').style.display = 'block';
        document.getElementById('projektid-btn').classList.add('active');
        document.getElementById('gradient-bar').style.display = 'none';
        currentSection = 'projektid';
        showActiveText('projektid-btn');
        hideOtherImagesMobile('projektid-btn'); // Hide other images only for mobile devices
        scrollToSectionOnMobile('projektid-content');
    }
}

function showKontakt() {
    if (currentSection === 'kontakt') {
        resetPage(); // If the same section is clicked, reset the page
    } else {
        hideAllSections();
        document.getElementById('kontakt-content').style.display = 'flex';
        document.getElementById('kontakt-btn').classList.add('active');
        document.getElementById('gradient-bar').style.display = 'none';
        document.body.style.alignContent = 'space-between';
        currentSection = 'kontakt'; // Set current section to "kontakt"
        showActiveText('kontakt-btn');
        hideOtherImagesMobile('kontakt-btn'); // Hide other images only for mobile devices
        scrollToSectionOnMobile('kontakt-content'); 
    }
}


// Utility function to show only the <p> of the active button and hide the others
function showActiveText(activeButtonId) {
    // Get all nav buttons
    let navButtons = document.querySelectorAll('.nav-button');

    navButtons.forEach(button => {
        let paragraph = button.querySelector('p');

        if (button.id === activeButtonId) {
            // Show the <p> tag of the active button
            paragraph.style.visibility = 'visible';
        } else {
            // Hide the <p> tags of non-active buttons
            paragraph.style.visibility = 'hidden';
        }
    });
}

// Example: Update functions to handle consistent image classes
function hideOtherImagesMobile(activeButtonId) {
    if (window.innerWidth <= 768) {
        let navButtons = document.querySelectorAll('.nav-button');

        navButtons.forEach(button => {
            let paragraph = button.querySelector('p');

            if (button.id === activeButtonId) {
                // Show the active button smoothly
                button.style.transition = 'opacity 0.5s ease-in-out, max-height 0.5s ease-in-out';
                button.style.opacity = '1';
                button.style.maxHeight = '20vh'; // Set max height to original to ensure visibility
                button.style.display = 'block'; // Ensure it's displayed
                paragraph.style.visibility = 'visible';
            } else {
                // Smoothly fade out and hide non-selected buttons
                button.style.transition = 'opacity 0.5s ease-in-out, max-height 0.5s ease-in-out';
                button.style.opacity = '0'; // Fade out
                button.style.maxHeight = '0'; // Collapse height

                // Use a timeout to set display to 'none' after the opacity transition completes
                setTimeout(() => {
                    if (window.innerWidth <= 768) { // Make sure it's still in mobile view
                        button.style.display = 'none'; // Remove from the layout
                    }
                }, 500); // Match the duration of the opacity transition (0.5s)

                paragraph.style.visibility = 'hidden'; // Hide the paragraph text
            }
        });

        // Adjust alignment of nav-container to center the selected button with smooth transition
        const navContainer = document.querySelector('.nav-container');
        navContainer.style.transition = 'gap 0.5s ease-in-out, justify-content 0.5s ease-in-out';
        navContainer.style.justifyContent = 'center';
        navContainer.style.gap = '0';
    }
}






function copyToClipboard(elementId) {
    var text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(function() {
        alert("Copied: " + text);
    }).catch(function(error) {
        console.error('Error copying text: ', error);
    });
}
document.fonts.ready.then(() => {
    const textElement = document.querySelector('#running-text');
    const textWidth = textElement.scrollWidth / 2; // Since text is duplicated
    const animationDuration = textWidth / 100; // Adjust the divisor to control speed

    // Set CSS variables
    document.documentElement.style.setProperty('--text-width', `${textWidth}px`);
    document.documentElement.style.setProperty('--animation-duration', `${animationDuration}s`);
});

const translations = {
    est: {
        languageButton: 'Est',
        'meist-content-text': `Asutatud 2024. aastal, oleme noorte ja ettevõtlike inimeste meeskond, kes on väsinud nägemast samu korduvaid turundusstrateegiaid. Seetõttu oleme ühendanud oma teadmised ja loovuse, et pakkuda teie ettevõttele ainulaadset sisu, mis aitab jõuda uute sihtrühmadeni ja avada uusi turuvõimalusi. <br> <br> Pakume turundust, mis on vaba-loomuline, humoorikas, truuks jäädes teie brändi kuvandile ja täis väärtuslikku sisu: spetsialiseerudes Gen Z-le ja võttes arvesse teie ettevõtte väärtusi. <br> <br> Kohandame oma strateegiad vastavalt teie konkreetsetele eesmärkidele ja visioonile, tagades tulemusi toovad lahendused.`,
        'projektid-content-text': 'Praegu uuendamisel...',
        'running-text': `Täisteenust pakkuv <span class="coolvetica">turundusagentuur</span>, mille fookus on noorem generatsioon – loome ja viime ellu turundusstrateegiaid, mis on suunatud Gen Z publikule.`,
        'nav-meist': 'Meist',
        'nav-projektid': 'Projektid',
        'nav-kontakt': 'Kontakt',
    },
    eng: {
        languageButton: 'Eng',
        'meist-content-text': `Established in 2024, we are a team of young and entrepreneurial individuals who are tired of seeing the same repetitive marketing strategies. That’s why we decided to combine our knowledge and creativity to offer your business unique content that helps reach new target audiences and unlock new market opportunities. <br> <br> We offer marketing that is casual, humorous, true to your brand image and filled with valuable content: specializes on Gen Z and takes your companies values into account. <br> <br> We customize our strategies to align with your specific goals and vision, ensuring tailored solutions that drive results.`,
        'projektid-content-text': 'Currently updating...',
        'running-text': `Full–service <span class="coolvetica">marketing agency</span>, focused on the younger generation — creating and executing marketing stratagies targeted at Gen Z audiences.`,
        'nav-meist': 'About',
        'nav-projektid': 'Projects',
        'nav-kontakt': 'Contact',
    }
};

// Set the default language
let currentLanguage = 'est';

function changeLanguage() {
    var languageBtn = document.getElementById('language-btn');

    // Toggle the language
    currentLanguage = currentLanguage === 'est' ? 'eng' : 'est';

    // Update the language button text
    languageBtn.innerText = translations[currentLanguage].languageButton;

    // Update 'meist-content' text
    document.querySelector('#meist-content p').innerHTML = translations[currentLanguage]['meist-content-text'];

    // Update 'projektid-content' text
    document.querySelector('#projektid-content p').innerText = translations[currentLanguage]['projektid-content-text'];

    // Update running text
    const runningTextElements = document.querySelectorAll('#running-text .text');
    runningTextElements.forEach(element => {
        element.innerHTML = translations[currentLanguage]['running-text'];
    });

    // Update navigation labels without changing HTML
    // Select the <p> tags inside each navigation button and update their text
    document.querySelector('#meist-btn p').innerText = translations[currentLanguage]['nav-meist'];
    document.querySelector('#projektid-btn p').innerText = translations[currentLanguage]['nav-projektid'];
    document.querySelector('#kontakt-btn p').innerText = translations[currentLanguage]['nav-kontakt'];
    
    if (languageBtn.innerText === 'Est') {
        languageBtn.style.backgroundColor = '#66726E';
    } else {
        languageBtn.style.backgroundColor = '#DD0D7E';
    }
}
function scrollToSectionOnMobile(sectionId) {
    if (window.innerWidth <= 768) { // Adjust the breakpoint as needed
        const section = document.getElementById(sectionId);
        if (section) {
            const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
            const offset = 500; // Adjust if you need to offset the scroll position
            const targetPosition = sectionPosition - offset;
            const duration = 400; // Duration in milliseconds

            setTimeout(function() {
                smoothScrollTo(targetPosition, duration);
            }, 300);        
        }
    }
}
function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.pageYOffset || document.documentElement.scrollTop;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);

        window.scrollTo(0, run);

        if (timeElapsed < duration) {
            window.requestAnimationFrame(animation);
        }
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    window.requestAnimationFrame(animation);
}
function scrollToTop(duration, startPosition, callback) {
    const targetPosition = 0; // We want to scroll to the top
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);

        window.scrollTo(0, run);

        if (timeElapsed < duration) {
            window.requestAnimationFrame(animation);
        } else {
            // Ensure we end up exactly at the target position
            window.scrollTo(0, targetPosition);
            if (typeof callback === 'function') {
                callback();
            }
        }
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    window.requestAnimationFrame(animation);
}
