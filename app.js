//variables
const sideBar = document.querySelector('.side-bar');
const lines = document.querySelector('.lines');
const date = document.getElementById('date')

//eventListeners
lines.addEventListener('click', () => {
    sideBar.classList.toggle('open');
});

//generate the current year

date.innerHTML = new Date().getFullYear();


