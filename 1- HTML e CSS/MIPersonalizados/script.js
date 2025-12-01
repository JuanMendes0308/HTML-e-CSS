document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const btnNext = document.querySelector(".next");
  const btnPrev = document.querySelector(".prev");

  let index = 0;

  function moveToSlide(i) {
    track.style.transform = `translateX(-${i * 100}%)`;
  }

  btnNext.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    moveToSlide(index);
  });

  btnPrev.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    moveToSlide(index);
  });
});
