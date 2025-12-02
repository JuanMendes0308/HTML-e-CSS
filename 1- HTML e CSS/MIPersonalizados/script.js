const track = document.querySelector('.carousel-track');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');

let index = 0;

function getCardWidth() {
    const card = track.querySelector('.cartao-produto');
    return card.offsetWidth + 20; // largura + gap
}

btnNext.addEventListener('click', () => {
    const cardWidth = getCardWidth();
    const maxIndex = track.children.length - Math.floor(track.parentElement.offsetWidth / cardWidth);

    if (index < maxIndex) {
        index++;
        track.style.transform = `translateX(-${index * cardWidth}px)`;
    }
});

btnPrev.addEventListener('click', () => {
    const cardWidth = getCardWidth();

    if (index > 0) {
        index--;
        track.style.transform = `translateX(-${index * cardWidth}px)`;
    }
});
