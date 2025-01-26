document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  
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

const imgWrappers = document.querySelectorAll(".about-img-wrapper");
const isMobile = window.matchMedia("(max-width: 768px)").matches;
const start = isMobile ? "top 90%" : "top center"; 
const end = isMobile ? "top 80%" : "center 90%";

gsap.fromTo(
  imgWrappers,
  {
    opacity: 0,
    x: (i) => (Math.random() < 0.5 ? -300 : 300),
    y: (i) => (Math.random() < 0.5 ? -200 : 200),
  },
  {
    opacity: 1,
    x: 0,
    y: 0,
    duration: 1,
    ease: "power3.inOut",
    stagger: 0.05,
    scrollTrigger: {
      trigger: "section.about-me",
      start: start,
      end: end,
    },
  }
);

  imgWrappers.forEach(imgWrapper => {
    const matrix = window.getComputedStyle(imgWrapper).transform;
    let initialRotation = 0;
  
    if (matrix !== "none") {
      const values = matrix.split('(')[1].split(')')[0].split(',');
      const a = parseFloat(values[0]);
      const b = parseFloat(values[1]);
      initialRotation = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    }
  
    imgWrapper.addEventListener('mouseenter', () => {
      gsap.to(imgWrapper, {
        rotation: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  
    imgWrapper.addEventListener('mouseleave', () => {
      gsap.to(imgWrapper, {
        rotation: initialRotation,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });
});