document.addEventListener('DOMContentLoaded', () => {
    let navOpen = false;
    const hamburger = document.querySelector('#hamburger');
    const navItems = document.querySelector('.nav-items');

    const processNavChange = () => {
        navOpen = !navOpen;
        if (navOpen) {
            navItems.style.display = 'flex';
            navItems.style.animation = 'grow-nav 0.2s forwards';
        }
        else {
            navItems.style.animation = 'shrink-nav 0.2s forwards';
            setTimeout(() => {
                navItems.style.display = 'none';
            }, 150);
        }
    }

    hamburger.onclick = processNavChange;

    const mql = window.matchMedia('(min-aspect-ratio: 1/1)');
    mql.addEventListener('change', (e) => {
        navOpen = false;
        processNavChange();
        if (!e.matches) {
            hamburger.style.display = 'flex';
            navItems.style.display = 'none';
        }
        else {
            hamburger.style.display = 'none';
            navItems.style.display = 'flex';
            navItems.style.animation = '';
        }
    })
})