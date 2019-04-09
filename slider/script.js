let sliderItems = document.querySelectorAll(".slide"),
    arrowNext = document.querySelector(".next"),
    arrowPrev = document.querySelector(".prev"),
    current = 0;

function reset() {
  for(let i = 0; i < sliderItems.length; i++) {
    sliderItems[i].style.display = "none";
  }
}

function startSlide() {
  reset();
  sliderItems[0].style.display = "grid";
}

function slidePrev() {
  reset();
  sliderItems[current - 1].style.display = "grid";
  current--;
}

function slideNext() {
  reset();
  sliderItems[current + 1].style.display = "grid";
  current++;
}

arrowPrev.addEventListener('click', function() {
  if (current === 0) {
    current = sliderItems.length;
  }
  slidePrev();
})

arrowNext.addEventListener('click', function() {
  if(current === sliderItems.length - 1) {
    current = -1;
  }
  slideNext();
})

startSlide();