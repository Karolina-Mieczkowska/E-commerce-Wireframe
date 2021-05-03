productsNavItem = document.querySelector('.dropdown-toggle');
activeLink = document.querySelector('.active');

const highlightActiveLink = (ind) => {
    ind.addEventListener('click', () => {
        productsNavItem.classList.add('active');
        activeLink.classList.remove('active');
    })
}

document.querySelectorAll('.dropdown-item').forEach((ind) => {
    highlightActiveLink(ind);
})

document.querySelectorAll('.footer-icon').forEach((ind) => {
    highlightActiveLink(ind);
})
