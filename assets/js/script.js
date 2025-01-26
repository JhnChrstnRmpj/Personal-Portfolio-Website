function roller(slideshowEl, speed, direction = 'right') {
  let tickerSpeed = speed;
  let flickity = null;
  let isPaused = false;
  
  tickerSpeed = direction === 'left' ? -tickerSpeed : tickerSpeed;

  const update = () => {
    if (isPaused) return;
    if (flickity.slides) {
      flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
      flickity.selectedIndex = flickity.dragEndRestingSelect();
      flickity.updateSelectedSlide();
      flickity.settle(flickity.x);
    }
    window.requestAnimationFrame(update);
  };

  const pause = () => {
    isPaused = true;
  };

  const play = () => {
    if (isPaused) {
      isPaused = false;
      window.requestAnimationFrame(update);
    }
  };

  flickity = new Flickity(slideshowEl, {
    autoPlay: false,
    prevNextButtons: false,
    pageDots: false,
    draggable: false,
    wrapAround: true,
    selectedAttraction: 0.015,
    friction: 0.25,
    adaptiveHeight: true,
    imagesLoaded: true,
  });
  flickity.x = 0;

  // slideshowEl.addEventListener("mouseenter", pause, false);
  // slideshowEl.addEventListener("mouseleave", play, false);

  flickity.on("dragStart", () => {
    isPaused = true;
  });

  update();
}

document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".iconCarousel");

  carousels.forEach((rollerEl, i) => {
    const direction = rollerEl.getAttribute('data-direction') || 'right';
    roller(rollerEl, 0.2, direction);
  });
});
