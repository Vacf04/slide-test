const slide = document.querySelector(".slide");
const item = document.querySelector(".slide li");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slideLenght = slide.children.length - 1;
let actualSlide = 0;

console.log(slide.scrollWidth);
console.log(item.offsetWidth);

function clearActiveClasses() {
  const slides = document.querySelectorAll(".slide li");
  slides.forEach((slide) => slide.classList.remove("active"));
}

right.addEventListener("click", () => {
  if (actualSlide >= slideLenght) {
    actualSlide = 0;
    slide.style.transform = `translate(-${item.offsetWidth * actualSlide}px)`;
    clearActiveClasses();
    slide.children[actualSlide].classList.add("active");
    return;
  } else {
    actualSlide += 1;
    slide.style.transform = `translate(-${item.offsetWidth * actualSlide}px)`;
    clearActiveClasses();
    slide.children[actualSlide].classList.add("active");
  }
});
left.addEventListener("click", () => {
  if (actualSlide == 0) {
    actualSlide = slideLenght;
    slide.style.transform = `translate(-${item.offsetWidth * actualSlide}px)`;
    clearActiveClasses();
    slide.children[actualSlide].classList.add("active");
    return;
  } else {
    actualSlide -= 1;
    slide.style.transform = `translate(-${item.offsetWidth * actualSlide}px)`;
    clearActiveClasses();
    slide.children[actualSlide].classList.add("active");
  }
});
