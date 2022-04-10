const btnDark = document.getElementById('btnDark');

btnDark.addEventListener('click', () => {
    const toDark = !document.body.classList.contains('dark-mode');
    darkMode(toDark)
});
document.addEventListener('DOMContentLoaded', () => {
    const dark = JSON.parse(localStorage.getItem('Dark Mode'));
    if (dark) {
        console.log(dark)
        darkMode(dark);
    }
})

const darkMode = (dark) => {
    document.body.classList.toggle('dark-mode');
    if (dark) {
        btnDark.querySelector('i').classList.replace('fa-solid', 'fa-regular');
        btnDark.querySelector('span').textContent = 'Light Mode';
        localStorage.setItem('Dark Mode', true);
    } else {
        btnDark.querySelector('i').classList.replace('fa-regular', 'fa-solid');
        btnDark.querySelector('span').textContent = 'Dark Mode';
        localStorage.setItem('Dark Mode', false);
    }
}
