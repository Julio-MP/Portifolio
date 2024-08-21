function aplicarTema() {
    const stylesheet = document.getElementById('theme-stylesheet');
    const tema = localStorage.getItem('tema');
    const img = document.getElementById('img1');

    if (tema === 'claro') {
        stylesheet.setAttribute('href', 'styles/style2.css');
        if (img) img.setAttribute('src', 'assets/profile-pic (4).png');
    } else {
        stylesheet.setAttribute('href', 'styles/style.css');
        if (img) img.setAttribute('src', 'assets/profile-pic (3).png');
    }
}

// Função para trocar o tema e salvar no localStorage
function trocarTema() {
    const temaAtual = localStorage.getItem('tema');
    const img = document.getElementById('img1');

    if (temaAtual === 'claro') {
        localStorage.setItem('tema', 'escuro');
        if (img) img.setAttribute('src', 'assets/profile-pic (3).png');
    } else {
        localStorage.setItem('tema', 'claro');
        if (img) img.setAttribute('src', 'assets/profile-pic (4).png');
    }

    aplicarTema()
}

// Chamar a função aplicarTema ao carregar a página
document.addEventListener('DOMContentLoaded', aplicarTema); 
