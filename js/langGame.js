const translations = {
    'pt-br': {
        title: 'Lista de Jogos',
        back: 'Voltar',
        link: 'Entre em contato',
        text1: 'Jogos Unity (C#)',
        text2: 'Jogos Web (JavaScript)' ,
    },
    'en': {
        title: 'Game List',
        back: 'Back',
        link: 'Contact me',
        text1: 'Unity Games (C#)',
        text2: 'Web Games (JavaScript)' ,
    },
    'it': {
        title: 'Elenco dei Giochi',
        back: 'Volte',
        link: 'Contattami',
        text1: 'Giochi Unity (C#)',
        text2: 'Web Giochi (JavaScript)',
    }
};

function changeLanguage(lang) {
    // Save the selected language to localStorage
    localStorage.setItem('preferredLanguage', lang);

    // Apply the language change
    document.getElementById('title').innerHTML = translations[lang].title;
    document.getElementById('back').textContent = translations[lang].back;
    document.getElementById('Link5').textContent = translations[lang].link;
    document.getElementById('text1').textContent = translations[lang].text1;
    document.getElementById('text2').textContent = translations[lang].text2;
}

// Load the saved language on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(savedLanguage);
});



// const translations = {
//     'pt-br': {
//         title: 'Lista de Jogos',
//         back: 'Voltar',
//         link: 'Entre em contato',
//         text1: 'Jogos Unity (C#)',
//         text2: 'Jogos Web (JavaScript)' ,
//     },
//     'en': {
//         title: 'Game List',
//         back: 'Back',
//         link: 'Contact me',
//         text1: 'Unity Games (C#)',
//         text2: 'Web Games (JavaScript)' ,
//     },
//     'it': {
//         title: 'Elenco dei Giochi',
//         back: 'Volte',
//         link: 'Contattami',
//         text1: 'Giochi Unity (C#)',
//         text2: 'Web Giochi (JavaScript)',
//     }
// };







// function changeLanguage(lang) {
//     document.getElementById('title').innerHTML = translations[lang].title;
//     document.getElementById('back').textContent = translations[lang].back;
//     document.getElementById('Link5').textContent = translations[lang].link;
//     document.getElementById('text1').textContent = translations[lang].text1;
//     document.getElementById('text2').textContent = translations[lang].text2;
// }

