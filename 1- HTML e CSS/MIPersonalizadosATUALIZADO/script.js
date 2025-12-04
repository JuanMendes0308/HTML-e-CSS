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
 
// ====== CARROSSEL AUTOMÁTICO DO PORTFÓLIO ======
 
const portCarousel = document.querySelector("#portifolio .carousel-track");
const portCards = document.querySelectorAll("#portifolio .cartao-produto");
 
// índice pra saber qual card mostrar
let portIndex = 0;
 
// função que muda o card
function autoSlidePortifolio() {
    portIndex++;
 
    // se passou do último, volta pro início
    if (portIndex >= portCards.length) {
        portIndex = 0;
    }
 
    // largura do card + espaçamento (gap: 60px)
    const cardWidth = portCards[0].offsetWidth + 60;
 
    portCarousel.style.transform = `translateX(${-cardWidth * portIndex}px)`;
}
 
// troca a cada 3 segundos (3000 ms)
setInterval(autoSlidePortifolio, 3000);
 
 
 
 