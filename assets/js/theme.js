if (window.matchMedia('(prefers-color-scheme: dark)').matches === true) {
    document.body.classList.add('dark');
};

function themeToggle() {
    document.body.classList.toggle('dark');
}
