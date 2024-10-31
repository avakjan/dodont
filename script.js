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
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (window.innerWidth <= 768) {
        // Start the scroll animation
        scrollToTop(500, currentScrollPosition);

        // Perform DOM updates immediately
        performDOMUpdates();
    } else {
        // Perform DOM updates immediately without scrolling
        performDOMUpdates();
    }
}


function performDOMUpdates() {

    const gradientBarElement = document.getElementById('gradient-bar');
    gradientBarElement.style.display = 'block';
    document.body.style.alignContent = 'flex-start';

    const navButtons = document.querySelectorAll('.nav-button');

    navButtons.forEach(button => {

        button.classList.remove('hidden', 'active');
        button.style.display = 'block';

        const paragraph = button.querySelector('p');

        void button.offsetHeight;

        button.style.transition = 'opacity 0.5s ease-in-out, max-height 0.5s ease-in-out';
        button.style.opacity = '1';
        button.style.maxHeight = '20vh'; 

        paragraph.style.visibility = 'visible';
    });

    const navContainer = document.querySelector('.nav-container');
    navContainer.style.transition = 'gap 0.5s ease-in-out, justify-content 0.5s ease-in-out';
    navContainer.style.justifyContent = ''; 
    navContainer.style.gap = window.innerWidth <= 768 ? '5vh' : '8vw';

    currentSection = null;
    if (window.innerWidth <= 768) {
        setTimeout(() => {
            hideAllSections();
        }, 600);
    } else {
        hideAllSections();
    }
    
}

function hideAllSections() {
    
    document.getElementById('meist-content').style.display = 'none';
    document.getElementById('projektid-content').style.display = 'none';
    document.getElementById('kontakt-content').style.display = 'none';

    let navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.classList.remove('active');
    });
}

function showMeist() {
    if (currentSection === 'meist') {
        resetPage(); 
    } else {
        hideAllSections();
        document.getElementById('meist-content').style.display = 'block';
        document.getElementById('meist-btn').classList.add('active');
        document.getElementById('gradient-bar').style.display = 'none';
        document.body.style.alignContent = 'flex-start';
        currentSection = 'meist'; 
        showActiveText('meist-btn');
        hideOtherImagesMobile('meist-btn'); 
        scrollToSectionOnMobile('meist-content'); 
    }
}

//PRAEGU UUENDAMISEL
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
        hideOtherImagesMobile('projektid-btn'); 
        scrollToSectionOnMobile('projektid-content');
    }
}

//WITH CONTENT
/*function showProjektid() {
    if (currentSection === 'projektid') {
        resetPage();
    } else {
        hideAllSections();
        document.getElementById('projektid-content').style.display = 'flex';
        document.getElementById('projektid-btn').classList.add('active');
        document.getElementById('gradient-bar').style.display = 'none';
        currentSection = 'projektid';
        showActiveText('projektid-btn');
        hideOtherImagesMobile('projektid-btn'); 
        scrollToSectionOnMobile('projektid-content');
    }
}*/

function showKontakt() {
    if (currentSection === 'kontakt') {
        resetPage(); 
    } else {
        hideAllSections();
        document.getElementById('kontakt-content').style.display = 'flex';
        document.getElementById('kontakt-btn').classList.add('active');
        document.getElementById('gradient-bar').style.display = 'none';
        document.body.style.alignContent = 'space-between';
        currentSection = 'kontakt'; 
        showActiveText('kontakt-btn');
        hideOtherImagesMobile('kontakt-btn'); 
        scrollToSectionOnMobile('kontakt-content'); 
    }
}

function showActiveText(activeButtonId) {
    
    let navButtons = document.querySelectorAll('.nav-button');

    navButtons.forEach(button => {
        let paragraph = button.querySelector('p');

        if (button.id === activeButtonId) {
            
            paragraph.style.visibility = 'visible';
        } else {
            
            paragraph.style.visibility = 'hidden';
        }
    });
}

function hideOtherImagesMobile(activeButtonId) {
    if (window.innerWidth <= 768) {
        let navButtons = document.querySelectorAll('.nav-button');

        navButtons.forEach(button => {
            let paragraph = button.querySelector('p');

            if (button.id === activeButtonId) {
                
                button.style.transition = 'opacity 0.5s ease-in-out, max-height 0.5s ease-in-out';
                button.style.opacity = '1';
                button.style.maxHeight = '20vh'; 
                button.style.display = 'block'; 
                paragraph.style.visibility = 'visible';
            } else {
                
                button.style.transition = 'opacity 0.5s ease-in-out, max-height 0.5s ease-in-out';
                button.style.opacity = '0'; 
                button.style.maxHeight = '0'; 

                
                setTimeout(() => {
                    if (window.innerWidth <= 768) { 
                        button.style.display = 'none'; 
                    }
                }, 500); 

                paragraph.style.visibility = 'hidden'; 
            }
        });

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
    const textWidth = textElement.scrollWidth / 2; 
    const animationDuration = textWidth / 100; 

    document.documentElement.style.setProperty('--text-width', `${textWidth}px`);
    document.documentElement.style.setProperty('--animation-duration', `${animationDuration}s`);
});

const translations = {
    est: {
        languageButton: 'Est',
        'meist-content-text': `<span class="coolvetica">Do don’t</span> on turundusagentuur, mis keskendub nooremale generatsioonile ning neile suunatud turunduskampaaniate loomisele ja elluviimisele. <br> <br>
        <span class="coolvetica">Meie väärtuspakkumised</span> <br>
        Teeme klientidega tihedat koostööd, luues partnerlusi ühise edu nimel. <br>
        Hoiame teie aega väärtuslikuna, pakkudes kiireid ja kvaliteetseid lahendusi. <br>
        Keskendume alati tippkvaliteedile, et meie lahendused eristuksid ja avaldaksid mõju. <br>
        Läbipaistvus ja aus suhtlus on meie töö aluseks, hoides teie huvid alati esikohal. <br>
        Oleme valmis võtma vastu uusi väljakutseid ja leidma teie brändile parimad lahendused. <br>
        Kohandame oma strateegiaid vastavalt teie eesmärkidele ja nägemusele. <br>
        Oleme paindlikud ja kiiresti reageerivad, tagades õigeaegse suhtluse ja toe. <br>
        Hindame tagasisidet ja näeme kriitikas võimalust areneda. <br>
        Oleme pühendunud loovusele ja innovatsioonile, et hoida teie bränd värskena ja aktuaalsena. <br> <br>
        <span class="coolvetica">Mida me pakume?</span> <br>
        Turundust mis spetsialiseerub Gen Z -le. <br>
        Turundust mis arvestab Teie ettevõtte väärtustega. <br>
        Turundust mis on vaba, humoorikas ja väärtuslikku sisuga. <br> <br>
        <span class="coolvetica">Meie tiim</span> <br>
        Meie tiim koosneb kolmest liikmest: <br>
        Mia – klienditugi, müügijuht <br>
        Diana – graafiline disainer <br>
        Hermiina - turundusjuht`,
        'gallery1-text': `<span class="coolvetica" style="color: #000000;">Do, don't agentuur</span> <br>
        Visuaalne identiteet, kampaania käivitamine`,
        'gallery2-text': `<span class="coolvetica" style="color: #000000;">Teine projekt</span> <br>
        Visuaalne identiteet`,
        'running-text': `Täisteenust pakkuv <span class="coolvetica">turundusagentuur</span>, mille fookus on noorem generatsioon – loome ja viime ellu turundusstrateegiaid, mis on suunatud Gen Z publikule.`,
        'nav-meist': 'Meist',
        'nav-projektid': 'Projektid',
        'nav-kontakt': 'Kontakt',
    },
    eng: {
        languageButton: 'Eng',
        'meist-content-text': `<span class="coolvetica">Do don’t</span> is a marketing agency focused on the younger generation and creating and executing marketing campaigns targeted at them. <br> <br>
        <span class="coolvetica">Our value propositions</span> <br>
        We work closely with clients, building partnerships for mutual success. <br>
        Your time is valuable. We focus on delivering fast, high-quality results. <br>
        Excellence drives us, ensuring our solutions stand out and make an impact. <br>
        Transparency and honesty are at the core of our business, always prioritizing your best interests. <br>
        We're ready for new challenges, always seeking the best solutions for your brand. <br>
        We adapt our strategies to align with your goals and vision. <br>
        We stay agile and responsive, ensuring timely communication and support. <br>
        We value feedback and see it as an opportunity for growth. <br>
        We embrace creativity to keep your brand fresh and relevant. <br> <br>
        <span class="coolvetica">What do we offer?</span> <br>
        Marketing that specializes on Gen Z. <br>
        Marketing that takes your companies values into account. <br>
        Marketing that is casual, humorous and filled with valuable content. <br> <br>
        <span class="coolvetica">Our team</span> <br>
        Our team consists of three individuals: <br>
        Mia – customer support, sales manager <br>
        Diana – graphic designer <br>
        Hermiina – marketing manager`,
        'gallery1-text': `<span class="coolvetica" style="color: #000000;">Do, don't agency</span> <br>
        Visual identity, launch campaign`,
        'gallery2-text': `<span class="coolvetica" style="color: #000000;">Second project</span> <br>
        Visual identity`,
        'running-text': `Full–service <span class="coolvetica">marketing agency</span>, focused on the younger generation — creating and executing marketing stratagies targeted at Gen Z audiences.`,
        'nav-meist': 'About',
        'nav-projektid': 'Projects',
        'nav-kontakt': 'Contact',
    }
};

let currentLanguage = 'est';

document.addEventListener("DOMContentLoaded", function () {
    function changeLanguage() {
      var languageBtn = document.getElementById('language-btn');
  
      if (!languageBtn) {
        console.error('Language button not found.');
        return;
      }
  
      currentLanguage = currentLanguage === 'est' ? 'eng' : 'est';
  
      languageBtn.innerText = translations[currentLanguage].languageButton;
  
      const meistContent = document.querySelector('#meist-content p');
      if (meistContent) {
        meistContent.innerHTML = translations[currentLanguage]['meist-content-text'];
      }
  
      const gallery1Text = document.querySelector('p[data-translate="gallery1-text"]');
      if (gallery1Text) {
          gallery1Text.innerHTML = translations[currentLanguage]['gallery1-text'];
      }

      const gallery2Text = document.querySelector('p[data-translate="gallery2-text"]');
      if (gallery2Text) {
          gallery2Text.innerHTML = translations[currentLanguage]['gallery2-text'];
      }
  
      const runningTextElements = document.querySelectorAll('#running-text .text');
      runningTextElements.forEach(element => {
        element.innerHTML = translations[currentLanguage]['running-text'];
      });
  
      const meistBtn = document.querySelector('#meist-btn p');
      if (meistBtn) {
        meistBtn.innerText = translations[currentLanguage]['nav-meist'];
      }
  
      const projektidBtn = document.querySelector('#projektid-btn p');
      if (projektidBtn) {
        projektidBtn.innerText = translations[currentLanguage]['nav-projektid'];
      }
  
      const kontaktBtn = document.querySelector('#kontakt-btn p');
      if (kontaktBtn) {
        kontaktBtn.innerText = translations[currentLanguage]['nav-kontakt'];
      }
  
      if (languageBtn.innerText === 'Est') {
        languageBtn.style.backgroundColor = '#66726E';
      } else {
        languageBtn.style.backgroundColor = '#DD0D7E';
      }
    }
  
    // Attach changeLanguage function to the button click event if it exists.
    const languageBtn = document.getElementById('language-btn');
    if (languageBtn) {
      languageBtn.addEventListener('click', changeLanguage);
    }
  });

function scrollToSectionOnMobile(sectionId) {
    if (window.innerWidth <= 768) { 
        const section = document.getElementById(sectionId);
        if (section) {
            const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
            const offset = 500; 
            const targetPosition = sectionPosition - offset;
            const duration = 500; 

            setTimeout(function() {
                smoothScrollTo(targetPosition, duration);
            }, 400);        
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

function scrollToTop(duration, startPosition) {
    return new Promise((resolve, reject) => {
        const targetPosition = 0; 
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
                window.scrollTo(0, targetPosition);
                resolve(); // Resolve the Promise when scrolling is complete
            }
        }

        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        }

        window.requestAnimationFrame(animation);
    });
}

let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {
  const containerWidth = scrollContainer.clientWidth;
  const maxScrollLeft = scrollContainer.scrollWidth - containerWidth;

  if (scrollContainer.scrollLeft >= maxScrollLeft) {
    // Reset to the start
    scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    scrollContainer.scrollBy({ left: containerWidth, behavior: 'smooth' });
  }
});

backBtn.addEventListener("click", () => {
  const containerWidth = scrollContainer.clientWidth;

  if (scrollContainer.scrollLeft <= 0) {
    // Reset to the end
    const maxScrollLeft = scrollContainer.scrollWidth - containerWidth;
    scrollContainer.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
  } else {
    scrollContainer.scrollBy({ left: -containerWidth, behavior: 'smooth' });
  }
});