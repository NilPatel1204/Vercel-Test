// Mobile DropWon
document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('menu-button');
    const menu = document.getElementById('mobile-menu');
    const openIcon = button.querySelector('svg:nth-of-type(1)');
    const closeIcon = button.querySelector('svg:nth-of-type(2)');

    button.addEventListener('click', function () {

        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
            openIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        } else {
            menu.classList.add('hidden');
            openIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    });
});