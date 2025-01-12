let scrollPosition = 0;

function scrollVideos(direction) {
    const wrapper = document.querySelector('.video-wrapper');
    const videoWidth = document.querySelector('.video-show').offsetWidth;
    const visibleWidth = document.querySelector('.video-scroll-container').offsetWidth;
    const totalWidth = wrapper.scrollWidth;

    const maxScroll = totalWidth - visibleWidth;

    if (direction === 'right') {
        scrollPosition = Math.min(scrollPosition + videoWidth, maxScroll);
    } else if (direction === 'left') {
        scrollPosition = Math.max(scrollPosition - videoWidth, 0);
    }

    wrapper.style.transform = `translateX(-${scrollPosition}px)`;
}