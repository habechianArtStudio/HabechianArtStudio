function menuClick() {
    const botao = document.getElementById('menu-section');
    if (botao.style.display == 'none') {
        botao.style.display = 'flex';
    } else if (botao.style.display != 'none') {
        botao.style.display = 'none';
    }
}