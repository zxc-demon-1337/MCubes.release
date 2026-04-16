document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.video-wrapper').forEach(card => {
    const video = card.querySelector('video');
    if (!video) return;

    let isPlaying = false;
    let playTimeout = null;
    let resetTimeout = null;

    card.addEventListener('click', () => {
      if (playTimeout) {
        clearTimeout(playTimeout);
        playTimeout = null;
        card.classList.remove('playing');
      }

      if (resetTimeout) {
        clearTimeout(resetTimeout);
        resetTimeout = null;
      }

      if (isPlaying) {
        video.pause();
        video.currentTime = 0;
        isPlaying = false;
        card.classList.remove('playing');
      } else {
        card.classList.add('playing');
        
        playTimeout = setTimeout(() => {
          video.play().catch(console.warn);
          isPlaying = true;
          playTimeout = null;
        }, 1);
      }
    });

    video.addEventListener('ended', () => {
      resetTimeout = setTimeout(() => {
        video.currentTime = 0;
        isPlaying = false;
        card.classList.remove('playing');
        resetTimeout = null;
      }, 2000);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio < 0.5 && isPlaying) {
          video.pause();
          video.currentTime = 0;
          isPlaying = false;
          card.classList.remove('playing');
          if (playTimeout) {
            clearTimeout(playTimeout);
            playTimeout = null;
          }
          if (resetTimeout) {
            clearTimeout(resetTimeout);
            resetTimeout = null;
          }
        }
      });
    }, { threshold: [0.5] });

    observer.observe(card);
  });
});