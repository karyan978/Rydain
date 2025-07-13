const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
let index = 0;

// Make it loop infinitely
function updateSlider() {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
  });

  const newIndex = index % slides.length;
  slides[newIndex].classList.add("active");

  const offset = (300 + 20) * (index - 1);
  slider.style.transform = `translateX(-${offset}px)`;
}

setInterval(() => {
  index = (index + 1) % slides.length;
  updateSlider();
}, 3000);

// Initial state
updateSlider();
