const hamburger = document.getElementById('hamburger');
const mobileContainer = document.getElementById('mobile-container');
const mobileMenu = document.getElementById('mobileMenu');
const mobileNavWrapper = document.querySelector('.mobile-nav-wrapper');
const mobileNavMenu = document.querySelector('.mobile-nav-menu');
const body = document.body;

const tl = gsap.timeline({ paused: true });

tl.to(mobileContainer, {
  opacity: 1,
  duration: 0.3,
  ease: 'power1.inOut'
}, '0')
  .to(mobileNavWrapper, {
    height: '200px',
    opacity: 1,
    duration: 0.2,
    top: 60,
    ease: 'ease.in',
  }, '0.1')
  .from(mobileNavMenu, {
    duration: 0.1,
    ease: 'power3.out'
  }, '.2');

function toggleMobileNav() {
  const isActive = mobileContainer.classList.toggle('active');
  mobileNavWrapper.classList.toggle('navActive');

  if (isActive) {
    tl.play();
    
  } else {
    tl.reverse();
  }
}

function closeMobileNav() {
  tl.reverse().eventCallback("onComplete", () => {
    mobileContainer.classList.remove('active');
    mobileNavWrapper.classList.remove('navActive');
  });
}

hamburger.addEventListener('click', toggleMobileNav);
window.addEventListener('resize', () => {
  if (window.innerWidth > 375) {
    closeMobileNav();
  }
});
