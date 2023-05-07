let menuButton = document.querySelector('.menu');

menuButton.addEventListener('click', (e) => {
    let navbar = document.getElementById('navbar');
    let navItems = navbar.querySelector('.container');
    // navItems.style.cssText = 'display: block';
    if(navItems.style.display === 'flex') {
        navItems.style.display = 'none';
    } else {
        navItems.style.display = 'flex';
    }
});