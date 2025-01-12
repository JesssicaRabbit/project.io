window.addEventListener('scroll', () => {
    const itsBlock = document.querySelector('.its-block');
    const rect = itsBlock.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        itsBlock.classList.add('visible');
    } else {
        itsBlock.classList.remove('visible');
    }
});