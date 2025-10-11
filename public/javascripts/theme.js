// public/javascripts/theme.js

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // 1. Cargar la preferencia del usuario desde el almacenamiento local
    const currentTheme = localStorage.getItem('theme');
    
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            toggleBtn.textContent = '☀️'; // Icono de Sol para salir del modo oscuro
        } else {
            body.classList.remove('dark-mode');
            toggleBtn.textContent = '🌙'; // Icono de Luna para entrar al modo oscuro
        }
    };

    // Aplicar el tema guardado o por defecto si no hay preferencia (claro)
    if (currentTheme) {
        applyTheme(currentTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Opción: Detectar la preferencia del sistema operativo si no hay preferencia guardada
        applyTheme('dark');
    } else {
        applyTheme('light');
    }

    // 2. Listener para el botón de alternar
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
});