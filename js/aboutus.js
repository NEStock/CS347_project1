const eventsInformation = [
    document.getElementById('professional-info'),
    document.getElementById('social-info'),
    document.getElementById('volunteer-info'),
];

const cards = [
    document.getElementById('professional'),
    document.getElementById('social'),
    document.getElementById('volunteer'),
];

cards[0].addEventListener('click', () => {
    eventsInformation[0].classList.toggle('open');
    eventsInformation[1].classList.remove('open');
    eventsInformation[2].classList.remove('open');
});

cards[1].addEventListener('click', () => {
    eventsInformation[0].classList.remove('open');
    eventsInformation[1].classList.toggle('open');
    eventsInformation[2].classList.remove('open');
});

cards[2].addEventListener('click', () => {
    eventsInformation[0].classList.remove('open');
    eventsInformation[1].classList.remove('open');
    eventsInformation[2].classList.toggle('open');
});