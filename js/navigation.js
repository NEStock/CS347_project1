const navigation = document.getElementById('navigation');
const menuButton = document.getElementById('menu-button');

menuButton.addEventListener('click', event => {
    navigation.classList.toggle('open');
    event.stopPropagation();
});

document.addEventListener('click', () => {
    navigation.classList.remove('open');
});