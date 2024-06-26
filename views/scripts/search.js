document.addEventListener('DOMContentLoaded', () => {
    const searchIcon = document.querySelector('.search-icon');
    const searchInput = document.getElementById('search');
    const searchBorder = document.querySelector('.search-border');

    searchInput.addEventListener('focus', () => {
        searchIcon.classList.add('si-rotate');
        searchBorder.classList.add('border-searching');
    });

    searchInput.addEventListener('blur', () => {
        searchIcon.classList.remove('si-rotate');
        searchBorder.classList.remove('border-searching');
    });
});