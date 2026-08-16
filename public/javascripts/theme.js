// public/javascripts/theme.js

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const metaThemeColor = document.getElementById('meta-theme-color');

    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            if (toggleBtn) toggleBtn.textContent = '☀️';
            if (metaThemeColor) metaThemeColor.setAttribute('content', '#0f172a');
        } else {
            body.classList.remove('dark-mode');
            if (toggleBtn) toggleBtn.textContent = '🌙';
            if (metaThemeColor) metaThemeColor.setAttribute('content', '#f8fafc');
        }
    };

    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        applyTheme(currentTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const isDarkMode = body.classList.contains('dark-mode');
            
            if (isDarkMode) {
                applyTheme('light');
                localStorage.setItem('theme', 'light');
            } else {
                applyTheme('dark');
                localStorage.setItem('theme', 'dark');
            }
        });
    }
});