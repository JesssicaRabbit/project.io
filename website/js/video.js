window.addEventListener('scroll', () => {
    const videoSection = document.querySelector('.video-section');
    const rect = videoSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        videoSection.classList.add('visible');
    } else {
        videoSection.classList.remove('visible');
    }
});