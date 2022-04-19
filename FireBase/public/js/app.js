const newGameModal = document.querySelector('.new-game');
const newGameLink = document.querySelector('.Add-Game');

newGameLink.addEventListener('click', () => {
    newGameModal.classList.add('open');
});

newGameModal.addEventListener('click', () => {
    if (e.target.classList.contains('new-game')) {
        newGameModal.classList.remove('open');
    }
})

