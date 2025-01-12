const videos = [
    { id: 'video1', src: 'https://videosrv.arhtc.ru:18080/hls/12654145/a5ccab2de1c6cc872c48/playlist.m3u8' },
    { id: 'video2', src: 'https://videosrv.arhtc.ru:18080/hls/12651603/d2fc7db79db6d2a4811c/playlist.m3u8' },
    { id: 'video4', src: 'https://videosrv.arhtc.ru:18080/hls/12652964/bd3ffb94b0a9408c5983/playlist.m3u8' },
    { id: 'video3', src: 'https://videosrv.arhtc.ru:18080/hls/12655138/83d800a264011f517470/playlist.m3u8' }
];

videos.forEach(video => {
    const videoElement = document.getElementById(video.id);
    if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(video.src);
        hls.attachMedia(videoElement);
    } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
        videoElement.src = video.src;
    }
});