const track = document.querySelector('.carousel-track');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');

let index = 0;

function getSlideWidth() {
    const slide = track.querySelector('.cartao-produto');
    return slide.offsetWidth;
}

function updateSlidePosition() {
    const slideWidth = getSlideWidth();
    track.style.transform = `translateX(-${index * slideWidth}px)`;
}

/* Botão NEXT */
btnNext.addEventListener('click', () => {
    const totalSlides = track.children.length;

    index++;

    // Reiniciar ao chegar no final
    if (index >= totalSlides) {
        index = 0; // volta para o início
    }

    updateSlidePosition();
});

/* Botão PREV */
btnPrev.addEventListener('click', () => {
    const totalSlides = track.children.length;

    index--;

    // voltar para o último ao voltar do início
    if (index < 0) {
        index = totalSlides - 1;
    }

    updateSlidePosition();
});
