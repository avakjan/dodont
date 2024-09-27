let currentSection = null;

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

    // Set current section to null
    currentSection = null;
}

function hideAllSections() {
    // Hide all content sections
    document.getElementById('meist-content').style.display = 'none';
    document.getElementById('kontakt-content').style.display = 'none';
    document.getElementById('projektid-content').style.display = 'none';

    document.getElementById('meist-img').src = 'Frame 4.png';
    document.getElementById('kontakt-img').src = 'Frame 6.png';
    document.getElementById('projektid-img').src = 'Frame 5.png';
}

function showMeist() {
    if (currentSection === 'meist') {
        resetPage(); // If the same section is clicked, reset the page
    } else {
        hideAllSections();
        document.getElementById('meist-content').style.display = 'block';
        document.getElementById('meist-img').src = 'about-icon 1.png';
        document.getElementById('gradient-bar').style.display = 'none';
        document.body.style.alignContent = 'flex-start';
        currentSection = 'meist'; // Set current section to "meist"
    }
}

function showKontakt() {
    if (currentSection === 'kontakt') {
        resetPage(); // If the same section is clicked, reset the page
    } else {
        hideAllSections();
        document.getElementById('kontakt-content').style.display = 'flex';
        document.getElementById('kontakt-img').src = 'contact-icon 1.png';
        document.getElementById('gradient-bar').style.display = 'none';
        document.body.style.alignContent = 'space-between';
        currentSection = 'kontakt'; // Set current section to "kontakt"
    }
}

function showProjektid() {
    if (currentSection === 'projektid') {
        resetPage();
    } else {
        hideAllSections();
        document.getElementById('projektid-content').style.display = 'block';
        document.getElementById('projektid-img').src = 'projects-icon 1.png';
        document.getElementById('gradient-bar').style.display = 'none';
        currentSection = 'projektid';
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