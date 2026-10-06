const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    
    if (document.body.classList.contains('light-theme')) {
        themeToggleBtn.textContent = '🌙 Түн режим';
    } else {
        themeToggleBtn.textContent = '☀️ Жарық режим';
    }
});
