let currentSection = null;
const imageUrls = [
    './images/Logo.png',
    './images/meist.png',
    './images/meistGrad.png',
    './images/projektid.png',
    './images/projektidGrad.png',
    './images/kontakt.png',
    './images/kontaktGrad.png',
    './images/LogoGrad.png',
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
    // Hide all sections and reset images to default
    hideAllSections();

    // Reset the gradient bar and align-content
    var gradientBarElement = document.getElementById('gradient-bar');
    gradientBarElement.style.display = 'block';
    document.body.style.alignContent = 'flex-start';

    // Show all <p> tags and reset images when the page is reset
    let navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        let normalImg = button.querySelector('img:first-child');
        let hoverImg = button.querySelector('.hover-img');
        let paragraph = button.querySelector('p');

        // Reset all images to be visible
        normalImg.style.display = 'block';
        hoverImg.style.display = 'block';

        // Reset the visibility of all <p> tags
        paragraph.style.visibility = 'visible';
        paragraph.style.display = 'block'; // Ensure text is displayed
    });

    // Reset nav-container gap to default value
    if (window.innerWidth <= 768) {
        const navContainer = document.querySelector('.nav-container');
        navContainer.style.gap = '5vh';
    } else {
        navContainer.style.gap = '8vw';
    }

    // Set current section to null
    currentSection = null;
}

function hideAllSections() {
    // Hide all content sections
    document.getElementById('meist-content').style.display = 'none';
    document.getElementById('projektid-content').style.display = 'none';
    document.getElementById('kontakt-content').style.display = 'none';

    // Reset images to default state
    document.getElementById('meist-img').src = './images/meist.png';
    document.getElementById('projektid-img').src = './images/projektid.png';
    document.getElementById('kontakt-img').src = './images/kontakt.png';
}


function showMeist() {
    if (currentSection === 'meist') {
        resetPage(); // If the same section is clicked, reset the page
    } else {
        hideAllSections();
        document.getElementById('meist-content').style.display = 'block';
        document.getElementById('meist-img').src = './images/meistGrad.png';
        document.getElementById('gradient-bar').style.display = 'none';
        document.body.style.alignContent = 'flex-start';
        currentSection = 'meist'; // Set current section to "meist"
        showActiveText('meist-btn');
        hideOtherImagesMobile('meist-btn'); // Hide other images only for mobile devices
    }
}

function showProjektid() {
    if (currentSection === 'projektid') {
        resetPage();
    } else {
        hideAllSections();
        document.getElementById('projektid-content').style.display = 'block';
        document.getElementById('projektid-img').src = './images/projektidGrad.png';
        document.getElementById('gradient-bar').style.display = 'none';
        currentSection = 'projektid';
        showActiveText('projektid-btn');
        hideOtherImagesMobile('projektid-btn'); // Hide other images only for mobile devices
    }
}

function showKontakt() {
    if (currentSection === 'kontakt') {
        resetPage(); // If the same section is clicked, reset the page
    } else {
        hideAllSections();
        document.getElementById('kontakt-content').style.display = 'flex';
        document.getElementById('kontakt-img').src = './images/kontaktGrad.png';
        document.getElementById('gradient-bar').style.display = 'none';
        document.body.style.alignContent = 'space-between';
        currentSection = 'kontakt'; // Set current section to "kontakt"
        showActiveText('kontakt-btn');
        hideOtherImagesMobile('kontakt-btn'); // Hide other images only for mobile devices
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

// Utility function to hide other images only for mobile devices and adjust layout accordingly
function hideOtherImagesMobile(activeButtonId) {
    // Check if the screen width is less than or equal to 768px (mobile device)
    if (window.innerWidth <= 768) {
        // Get all nav buttons
        let navButtons = document.querySelectorAll('.nav-button');

        navButtons.forEach(button => {
            let normalImg = button.querySelector('img:first-child');
            let hoverImg = button.querySelector('.hover-img');
            let paragraph = button.querySelector('p');

            if (button.id === activeButtonId) {
                // Keep the selected button's images and text visible
                normalImg.style.display = 'block';
                hoverImg.style.display = 'block';
                paragraph.style.display = 'block'; // Ensure text is displayed
            } else {
                // Hide the images of non-active buttons and ensure they take up no space
                normalImg.style.display = 'none';
                hoverImg.style.display = 'none';
                paragraph.style.display = 'none'; // Ensure text of non-active buttons is hidden
            }
        });

        if (window.innerWidth <= 768) {
            // Adjust alignment of nav-container to center the selected button
            const navContainer = document.querySelector('.nav-container');
            navContainer.style.justifyContent = 'center';
            navContainer.style.gap = '0';
        }
        
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

