document.addEventListener("DOMContentLoaded", () => {

  gsap.registerPlugin(ScrollTrigger);
  
  // Animation for the first scroll-trigger-wrapper (scrolling to the left)
  gsap.to(".scroll-trigger-wrapper:nth-child(1)", {
    xPercent: -100,
    ease: "ease-in-out",
    scrollTrigger: {
      trigger: "body",
      start: "top center",
      end: "bottom bottom",
      scrub: 1,
    }
  });

  // Animation for the second scroll-trigger-wrapper (scrolling to the right)
  gsap.to(".scroll-trigger-wrapper:nth-child(2)", {
    xPercent: 100,
    ease: "ease-in-out",
    scrollTrigger: {
      trigger: "body",
      start: "top center",
      end: "bottom bottom",
      scrub: 1,
    }
  });
});