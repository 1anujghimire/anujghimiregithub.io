/* ===================================
   THEME TOGGLE FUNCTIONALITY
   =================================== */

(function() {
    'use strict';
    
    // Get theme from localStorage or default to dark
    const getTheme = () => {
        return localStorage.getItem('theme') || 'dark';
    };
    
    // Set theme and save to localStorage
    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };
    
    // Initialize theme on page load
    const initTheme = () => {
        const currentTheme = getTheme();
        setTheme(currentTheme);
    };
    
    // Toggle between light and dark theme
    const toggleTheme = () => {
        const currentTheme = getTheme();
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };
    
    // Initialize theme immediately (before DOM loads) - default to dark
    initTheme();
    
    // Set up toggle button when DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
        const themeToggle = document.getElementById('theme-toggle');
        
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
            
            // Add keyboard support
            themeToggle.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleTheme();
                }
            });
        }
    });
    
    // Listen for system theme changes (optional enhancement)
    if (window.matchMedia) {
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        darkModeQuery.addEventListener('change', (e) => {
            // Only auto-switch if user hasn't manually set a preference
            if (!localStorage.getItem('theme')) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
})();
