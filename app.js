const sideBar = document.querySelector('.side-bar');
const lines = document.querySelector('.lines');

lines.addEventListener('click', () => {
    sideBar.classList.toggle('open');
});

