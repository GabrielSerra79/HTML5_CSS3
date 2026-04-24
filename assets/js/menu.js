function closeMenu(){
    document.getElementById('close-menu').checked = false;
}

document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    const navMenu = document.querySelector('.menu-content ul');

    if (logo) {
        logo.addEventListener('click', closeMenu);
    }

    if (navMenu) {
        navMenu.addEventListener('click', closeMenu);
    }
})
