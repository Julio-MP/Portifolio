function aplicarTema() {
    const stylesheet = document.getElementById('theme-stylesheet');
    const img = document.getElementById('img1');
    const tema = localStorage.getItem('tema');

    if (tema === 'claro') {
        stylesheet.setAttribute('href', 'style2.css');
        if (img) img.setAttribute('src', 'assets/profile-pic (2).png');
    } else {
        stylesheet.setAttribute('href', 'style.css');
        if (img) img.setAttribute('src', 'assets/profile-pic (1).png');
    }
}

// Função para trocar o tema e salvar no localStorage
function trocarTema() {
    const stylesheet = document.getElementById('theme-stylesheet');
    const img = document.getElementById('img1');
    const temaAtual = localStorage.getItem('tema');

    if (temaAtual === 'claro') {
        localStorage.setItem('tema', 'escuro');
        stylesheet.setAttribute('href', 'style.css');
        if (img) img.setAttribute('src', 'assets/profile-pic (1).png');
    } else {
        localStorage.setItem('tema', 'claro');
        stylesheet.setAttribute('href', 'style2.css');
        if (img) img.setAttribute('src', 'assets/profile-pic (2).png');
    }
}

// Chamar a função aplicarTema ao carregar a página
document.addEventListener('DOMContentLoaded', aplicarTema);

