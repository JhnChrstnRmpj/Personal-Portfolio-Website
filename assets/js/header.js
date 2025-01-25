const hamburger = document.getElementById('hamburger');
const mobileContainer = document.getElementById('mobile-container');
const mobileNavWrapper = document.querySelector('.mobile-nav-wrapper');
const mobileNavMenu = document.querySelector('.mobile-nav-menu');
const body = document.body;

const tl = gsap.timeline({ paused: true });

tl.to(mobileContainer, {
  opacity: 1,
  duration: 0.1,
  ease: 'power2.inOut',
}, '0')
  .to(mobileNavWrapper, {
    height: '200px',
    opacity: 1,
    duration: 0.1,
    top: 60,
    ease: 'power2.inOut',
  }, '0')
  .from(mobileNavMenu, {
    opacity: 0, 
    duration: 0.1,
    ease: 'power2.inOut',
  }, '0');

function toggleMobileNav() {
  const isActive = mobileContainer.classList.toggle('active');
  mobileNavWrapper.classList.toggle('navActive');

  if (isActive) {
    // Show the menu and play the animation
    gsap.set(mobileNavMenu, { opacity: 1 }); // Ensure text is visible
    tl.play();
  } else {
    // Reverse the animation
    tl.reverse();
    // Hide text after reverse animation finishes
    tl.eventCallback('onReverseComplete', () => {
      if (!mobileContainer.classList.contains('active')) {
        gsap.set(mobileNavMenu, { opacity: 0 }); // Ensure text is hidden
      }
    });
  }
}

function closeMobileNav() {
  if (mobileContainer.classList.contains('active')) {
    tl.reverse();
    tl.eventCallback('onReverseComplete', () => {
      mobileContainer.classList.remove('active');
      mobileNavWrapper.classList.remove('navActive');
      gsap.set(mobileContainer, { opacity: 0 });
      gsap.set(mobileNavMenu, { opacity: 0 });
    });
  }
}

let isMobile = window.innerWidth <= 375;
window.addEventListener('resize', () => {
  const currentlyMobile = window.innerWidth <= 375;

  if (currentlyMobile !== isMobile) {
    isMobile = currentlyMobile;

    if (!currentlyMobile) {
      closeMobileNav();
    } else {
      gsap.set(mobileContainer, { opacity: 0 });
      gsap.set(mobileNavMenu, { opacity: 0 }); // Ensure text is hidden when resizing
    }
  }
});

hamburger.addEventListener('click', toggleMobileNav);
