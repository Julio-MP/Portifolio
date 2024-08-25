const translations = {
    'pt-br': {
        title: 'Olá! <br>Bem-vindo ao <strong class="Strong1">meu Portfólio!</strong>',
        description: 'Aqui você pode encontrar alguns dos meus projetos concluídos',
        link1: 'Jogue meus jogos!',
        link2: 'Abra meu GitHub',
        link3: 'Meu LinkedIn',
        link4: 'Sobre mim',
        link5: 'Entre em Contato',
    },
    'en': {
        title: 'Hello!<br> Welcome to <strong class="Strong1">my Portfolio!</strong>',
        description: 'Here you can find some of my finish projects and more:',
        link1: 'Play my Games!',
        link2: 'Open my GitHub',
        link3: "My LinkedIn",
        link4: "About Me",
        link5: 'Contact me',
    },
    'it': {
        title: 'Ciao!<br> Benvenuto nel <strong class="Strong1">mio Portfolio!</strong>',
        description: 'Qui puoi trovare alcuni dei miei progetti finiti',
        link1: 'Gioca miei giochi!',
        link2: 'Apri il mio GitHub',
        link3: 'Mi LinkedIn',
        link4: 'Sobre mi',
        link5: 'Contattami',
    }
};

function changeLanguage(lang) {
    // Save the selected language to localStorage
    localStorage.setItem('preferredLanguage', lang);

    // Apply the language change
    document.getElementById('title').innerHTML = translations[lang].title;
    document.getElementById('text').textContent = translations[lang].description;
    document.getElementById('Link1').textContent = translations[lang].link1;
    document.getElementById('Link2').textContent = translations[lang].link2;
    document.getElementById('Link3').textContent = translations[lang].link3;
    document.getElementById('Link4').textContent = translations[lang].link4;
    document.getElementById('Link5').textContent = translations[lang].link5;
}

// Load the saved language on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(savedLanguage);
});






// const translations = {
//     'pt-br': {
//         title: 'Olá! <br>Bem-vindo ao <strong class="Strong1">meu Portfólio!</strong>',
//         description: 'Aqui você pode encontrar alguns dos meus projetos concluídos',
//         link1: 'Jogue meus jogos!',
//         link2: 'Abra meu GitHub',
//         link3: 'Meu LinkedIn',
//         link4: 'Sobre mim',
//         link5: 'Entre em Contato',
        
//     },
//     'en': {
//         title: 'Hello!<br> Welcome to <strong class="Strong1">my Portfolio!</strong>',
//         description: 'Here you can find some of my finish projects and more:',
//         link1: 'Play my Games!',
//         link2: 'Open my GitHub',
//         link3: "My LinkedIn",
//         link4: "About Me",
//         link5: 'Contact me',
        
//     },
//     'it': {
//         title: 'Ciao!<br> Benvenuto nel <strong class="Strong1">mio Portfolio!</strong>',
//         description: 'Qui puoi trovare alcuni dei miei progetti finiti',
//         link1: 'Gioca miei giochi!',
//         link2: 'Apri il mio GitHub',
//         link3: 'Mi LinkedIn',
//         link4: 'Sobre mi',
//         link5: 'Contattami',
        
//     }
// };



// function changeLanguage(lang) {
//     document.getElementById('title').innerHTML = translations[lang].title;
//     document.getElementById('text').textContent = translations[lang].description;
//     document.getElementById('Link1').textContent = translations[lang].link1;
//     document.getElementById('Link2').textContent = translations[lang].link2;
//     document.getElementById('Link3').textContent = translations[lang].link3;
//     document.getElementById('Link4').textContent = translations[lang].link4;
//     document.getElementById('Link5').textContent = translations[lang].link5;
// }

// -------------------------------------------------------------------------------/----------------------------------------------------------------//
// function changeLanguage(lang) {
//     if (window.location.pathname.includes('about.html')) {
//         if (document.getElementById('title2')) {
//             document.getElementById('title2').innerHTML = translations[lang].title2;
//         }
//         if (document.getElementById('back')) {
//             document.getElementById('back').textContent = translations[lang].back;
//         }
//         if (document.getElementById('link')) {
//             document.getElementById('link').textContent = translations[lang].link;
//         }
//         if (document.getElementById('about')) {
//             document.getElementById('about').textContent = translations[lang].text;
//         }
//     } else {
//         if (document.getElementById('title')) {
//             document.getElementById('title').innerHTML = translations[lang].title;
//         }
        
//         if (document.getElementById('text')) {
//             document.getElementById('text').textContent = translations[lang].description;
            
//         }
        
//         if (document.getElementById('Link1')) {
//             document.getElementById('Link1').textContent = translations[lang].link1;
//         }
        
//         if (document.getElementById('Link2')) {
//             document.getElementById('Link2').textContent = translations[lang].link2;
//         }
        
//         if (document.getElementById('Link3')) {
//             document.getElementById('Link3').textContent = translations[lang].link3;
//         }

//         if (document.getElementById('Link4')) {
//             document.getElementById('Link4').textContent = translations[lang].link4;
//         }

//         if (document.getElementById('Link5')) {
//             document.getElementById('Link5').textContent = translations[lang].link5;
//         }
//     }
// }

// function changeLanguage(lang) {
//     document.getElementById('title').innerHTML = translations[lang].title;
//     document.getElementById('text').textContent = translations[lang].description;
//     document.getElementById('Link1').textContent = translations[lang].link1;
//     document.getElementById('Link2').textContent = translations[lang].link2;
//     document.getElementById('Link3').textContent = translations[lang].link3;
//     document.getElementById('Link4').textContent = translations[lang].link4;
//     document.getElementById('Link5').textContent = translations[lang].link5;
    
//     document.getElementById('title2').innerHTML = translations[lang].title2;
//     document.getElementById('back').textContent = translations[lang].back;
//     document.getElementById('link').textContent = translations[lang].link;
//     document.getElementById('about').textContent = translations[lang].text;

// }



