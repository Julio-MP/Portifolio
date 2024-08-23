const translations = {
    'pt-br': {
        title: 'Sobre mim',
        back: 'Voltar',
        link: 'Entre em contato',
        text: 'PT',
        text2: 'Jogos Web (JavaScript)' ,
    },
    'en': {
        title: 'About',
        back: 'Back',
        link: 'Contact me',
        text: 'EN',
        text2: 'Web Games (JavaScript)' ,
    },
    'it': {
        title: 'Sobre mi',
        back: 'Volte',
        link: 'Contattami',
        text1: 'ITAA',
        text2: '()',
    }
};







function changeLanguage(lang) {
    document.getElementById('title').innerHTML = translations[lang].title2;
    document.getElementById('back').textContent = translations[lang].back;
    document.getElementById('Link5').textContent = translations[lang].link;
    document.getElementById('text1').textContent = translations[lang].text1;
    document.getElementById('text2').textContent = translations[lang].text2;
}