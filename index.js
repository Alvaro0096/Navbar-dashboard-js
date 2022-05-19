// SIDEBAR ANIMATION
const toggleBtn = document.getElementById('toggle');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    sidebar.classList.toggle('active');
})

document.addEventListener('click', (e) => {
    if(e.target.id !== 'sidebar' && e.target.id !== 'toggle'){
        toggleBtn.classList.remove('active');
        sidebar.classList.remove('active');
    }
})