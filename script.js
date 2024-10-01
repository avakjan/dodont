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

function changeLanguage() {
    var languageBtn = document.getElementById('language-btn');
    if (languageBtn.innerText === 'Est') {
        languageBtn.innerText = 'Eng';
    } else {
        languageBtn.innerText = 'Est';
    }
}

function resetPage() {
    // Hide all sections and reset images to default
    hideAllSections();

    // Reset the gradient bar and align-content
    var gradientBarElement = document.getElementById('gradient-bar');
    gradientBarElement.style.display = 'block';
    document.body.style.alignContent = 'flex-start';

    // Show all <p> tags when the page is reset
    let allParagraphs = document.querySelectorAll('.nav-button p');
    allParagraphs.forEach(p => p.style.visibility = 'visible');

    // Set current section to null
    currentSection = null;
}

function hideAllSections() {
    // Hide all content sections
    document.getElementById('meist-content').style.display = 'none';
    document.getElementById('projektid-content').style.display = 'none';
    document.getElementById('kontakt-content').style.display = 'none';

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
        'meist-content-text': `Asutatud aastal 2024, oleme noorte ja ettevõtlike inimeste meeskond, keda ühendab kirg värske ja uuendusliku turunduse vastu. Oleme väsinud korduvatest ja iganenud strateegiatest, mis valdkonda domineerivad, mistõttu otsustasime ühendada oma mitmekülgse turunduse, disaini ja digisuundumuste teadmistepagasi, et tuua lauale uus lähenemine. <br> <br> Pakume turundust, mis on pingevaba, humoorikas ja täis väärtuslikku sisu = spetsialiseerume Gen Z-le ja võtab arvesse teie ettevõtte väärtusi.`,
        'projektid-content-text': 'Praegu uuendamisel...',
        'running-text': `Täisteenust pakkuv <span class="coolvetica">turundusagentuur</span>, mille fookus on noorem generatsioon – loome ja viime ellu turundusstrateegiaid, mis on suunatud Gen Z publikule.`,
        'nav-meist': 'Meist',
        'nav-projektid': 'Projektid',
        'nav-kontakt': 'Kontakt',
    },
    eng: {
        languageButton: 'Eng',
        'meist-content-text': `Founded in 2024, we are three young and entrepreneurial individuals who are tired of seeing the same repetitive marketing strategies. That’s why we decided to combine our knowledge and creativity to offer your business unique content that helps reach new target audiences and unlock new market opportunities.
        <br><br>We offer marketing that is casual, humorous and filled with valuable content = specializes on Gen Z and takes your companies values into account.`,
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
    // Toggle the language
    currentLanguage = currentLanguage === 'est' ? 'eng' : 'est';

    // Update the language button text
    document.getElementById('language-btn').innerText = translations[currentLanguage].languageButton;

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
}

