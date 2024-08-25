const translations = {
    'pt-br': {
        title2: 'Sobre mim',
        back: 'Voltar',
        link: 'Entre em contato',
        text: 'PT',
    },
    'en': {
        title2: 'About',
        back: 'Back',
        link: 'Contact me',
        text: 'EN',
    },
    'it': {
        title2: 'Sobre mi',
        back: 'Volte',
        link: 'Contattami',
        text: 'ITAA',
    }
};

function changeLanguage(lang) {
    // Save the selected language to localStorage
    localStorage.setItem('preferredLanguage', lang);

    // Apply the language change
    document.getElementById('title2').innerHTML = translations[lang].title2;
    document.getElementById('back').textContent = translations[lang].back;
    document.getElementById('link').textContent = translations[lang].link;
    document.getElementById('about').textContent = translations[lang].text;
}

// Load the saved language on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(savedLanguage);
});








// const translations = {
//     'pt-br': {
//         title2: 'Sobre mim',
//         back: 'Voltar',
//         link: 'Entre em contato',
//         text: 'PT',
//     },
//     'en': {
//         title2: 'About',
//         back: 'Back',
//         link: 'Contact me',
//         text: 'EN',
//     },
//     'it': {
//         title2: 'Sobre mi',
//         back: 'Volte',
//         link: 'Contattami',
//         text: 'ITAA',
//     }
// };







// function changeLanguage(lang) {
//     document.getElementById('title2').innerHTML = translations[lang].title2;
//     document.getElementById('back').textContent = translations[lang].back;
//     document.getElementById('link').textContent = translations[lang].link;
//     document.getElementById('about').textContent = translations[lang].text;
// }