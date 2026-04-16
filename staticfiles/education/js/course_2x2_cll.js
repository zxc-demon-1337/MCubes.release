buttons = document.querySelectorAll('.formula_button')
vidWrapper = document.getElementById('vid_wrapper')
video = document.getElementById('video')
const gap = 10
// console.log(buttons)
function resetAllCards() {
    document.querySelectorAll('.formula-card').forEach(card => {
        const img = card.querySelector('img');
        const vidWrapper = card.querySelector('.vid_wrapper');
        const video = card.querySelector('.video_player');

        if (img) img.style.display = 'block';
        if (vidWrapper) vidWrapper.style.display = 'none';
        if (video) {
            video.pause();
        }
    });
    document.querySelectorAll('.formula_button').forEach(b => b.style.color = '#fff');
}

document.querySelectorAll('.formula_button').forEach(btn => {
    btn.addEventListener('click', (e) => {
        resetAllCards();

        const card = e.currentTarget.closest('.formula-card');
        const img = card.querySelector('img');
        const vidWrapper = card.querySelector('.vid_wrapper');
        const video = card.querySelector('.video_player');

        const fileName = e.currentTarget.dataset.src;
        video.src = `/static/education/videos/cll/${fileName}.webm`;
        video.load();               
        video.play().catch(() => {}); 
        img.style.display = 'none';
        vidWrapper.style.display = 'flex';

        const rect = e.currentTarget.getBoundingClientRect();
        const vidW = 180;
        const vidH = 180;

        vidWrapper.style.left = `${rect.left + window.scrollX + (rect.width - vidW) / 2}px`;
        vidWrapper.style.top  = `${rect.top + window.scrollY - vidH - rect.height - 10}px`;

        e.currentTarget.style.color = '#C04848';
    });
});

document.addEventListener('click', (e) => {
    const isInsideWrapper = e.target.closest('.vid_wrapper');
    const isInsideButton  = e.target.closest('.formula_button');
    
    if (!isInsideWrapper && !isInsideButton) {
        resetAllCards(); 
    }
});