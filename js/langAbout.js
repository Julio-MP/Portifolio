const translations = {
    'pt-br': {
        title2: 'Sobre mim',
        back: 'Voltar',
        link: 'Entre em contato',
        summary: 'Principais pontos fortes: <br> <strong class="Strong1">Curioso e dedicado!</strong>',
        text: "Gosto de resolver e inventar coisas com criatividade. Escolhi a área desenvolvedor pois é possível criar nosso próprio mundo através da programação. Além disso busco a liberdade para resolver problemas diários e encontrar soluções criativas com a tecnologia, como já dizia Platão 'A necessidade é a mãe da invenção.'",
    },
    'en': {
        title2: 'About',
        back: 'Back',
        link: 'Contact me',
        summary: 'Main strengths:<br> <strong class="Strong1">Curious and dedicated!</strong>',
        text: "I enjoy solving and inventing things with creativity. I chose the developer field because it's possible to create our own world through programming. In addition, I seek the freedom to solve daily problems and find creative solutions with technology. As Plato once said, 'Necessity is the mother of invention.'",
    },
    'it': {
        title2: 'Sobre mi',
        back: 'Volte',
        link: 'Contattami',
        summary: 'Principali punti di forza: <br> <strong class="Strong1">Curioso e dedicato!</strong>',
        text: "Mi piace risolvere e inventare cose con creatività. Ho scelto l'area dello sviluppo perché è possibile creare il nostro mondo attraverso la programmazione. Inoltre, cerco la libertà di risolvere i problemi quotidiani e trovare soluzioni creative con la tecnologia. Come diceva Platone, 'La necessità è la madre dell'invenzione.'",
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
    document.getElementById('summary').innerHTML = translations[lang].summary;
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