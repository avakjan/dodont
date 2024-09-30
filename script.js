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