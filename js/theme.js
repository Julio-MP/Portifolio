function trocarTema() {
    const stylesheet = document.getElementById('theme-stylesheet');
    if (stylesheet.getAttribute('href') === 'style.css') {
        stylesheet.setAttribute('href', 'style2.css');
    } else {
        stylesheet.setAttribute('href', 'style.css');
    }

        const img = document.getElementById('img1');
    if (img.getAttribute('src') === 'assets/profile-pic (1).png') {
        img.setAttribute('src', 'assets/profile-pic (2).png');
    } else {
        img.setAttribute('src', 'assets/profile-pic (1).png');
    }

}



