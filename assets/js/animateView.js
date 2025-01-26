function animateView() {
  var element = document.querySelectorAll("[animated]");

  element.forEach((element) => {
    init(element);
  });

  function init(el) {
    var config = el.getAttribute("animated");
    var offset = 40;
    var xOffset = el.hasAttribute("xOffset")
      ? el.getAttribute("xOffset")
      : -offset;
    var yOffset = el.hasAttribute("yOffset")
      ? el.getAttribute("yOffset")
      : offset;
    var delay = el.hasAttribute("delay")
      ? parseInt(el.getAttribute("delay"))
      : 0.25;
    var show = el.hasAttribute("show") ? 1 : 0;
    var isParentElement = config.includes("staggerChild");
    var _el = !isParentElement ? el : el.children;

    var setConfig = {
      transformOrigin: "center",
      force3D: true,
      rotationZ: 0.001,
      stagger: false,
      paused: true,
      immediateRender: true,
      autoAlpha: show,
      opacity: show,
      y: config == "" ? offset : 0,
    };

    var animateConfig = {
      transformOrigin: "center",
      force3D: true,
      rotationZ: 0.001,
      stagger: false,
      autoAlpha: 1,
      opacity: 1,
      y: 0,
      delay: parseInt(delay),
    };

    config.includes("fade")
      ? ((setConfig.autoAlpha = 0),
        (setConfig.opacity = 0),
        (animateConfig.autoAlpha = 1),
        (animateConfig.opacity = 1))
      : "";
    config.includes("slideY")
      ? ((setConfig.y = yOffset), (animateConfig.y = 0))
      : "";
    config.includes("slideX")
      ? ((setConfig.x = xOffset), (animateConfig.x = 0))
      : "";
    config.includes("scale")
      ? ((setConfig.scale = 0),
        (animateConfig.scale = 1),
        (animateConfig.opacity = 1),
        (animateConfig.ease = Back.easeOut))
      : "";
    config.includes("typewriter")
      ? ((animateConfig.autoAlpha = 0),
        (animateConfig.opacity = 0),
        (animateConfig.y = 0),
        (animateConfig.opacity = 1),
        (animateConfig.ease = Linear.easeNone),
        animateTypeWriter(el))
      : "";
    config.includes("counter")
      ? ((setConfig.autoAlpha = 1), (setConfig.opacity = 1), animateCounter(el))
      : "";
    config.includes("surprise")
      ? ((setConfig.autoAlpha = 1),
        (setConfig.opacity = 1),
        (setConfig.y = "100%"),
        (animateConfig.y = 0),
        setSurprise(el))
      : "";

    isParentElement
      ? ((animateConfig.stagger = 0.3),
        (animateConfig.opacity = 1),
        (el.style.opacity = 1))
      : false;

    var tween = gsap.fromTo(_el, 0.3, setConfig, animateConfig);
    var ismobile = window.innerWidth <= 600;

    elementInView(el) ? tween.play() : !ismobile ? tween.restart().pause() : "";
    window.addEventListener("scroll", () => {
      var ismobile = window.innerWidth <= 600;
      elementInView(el)
        ? tween.play()
        : !ismobile
        ? tween.restart().pause()
        : "";
    });
  }

  function animateTypeWriter(el) {
    var clone = el.nextElementSibling;
    var wrapper = clone.children[0];
    for (let i = 0; i < wrapper.childElementCount; i++) {
      var letter = wrapper.children;
      tween = gsap.to(letter, 0.0001, { visibility: "visible", stagger: 0.03 });
    }
  }

  function animateCounter(el) {
    var value = parseInt(el.getAttribute("countto").replace(",", ""));
    const from = Math.round(value / 3);
    const to = value;
    let obj = { count: from };

    var tween = gsap.to(obj, 2, {
      count: to,
      ease: "none",
      onUpdate: () => {
        el.innerHTML = numberWithCommas(Math.floor(obj.count));
      },
    });
    tween.restart().pause();
    window.addEventListener("scroll", () => {
      var ismobile = window.innerWidth <= 600;
      elementInView(el)
        ? tween.play()
        : !ismobile
        ? tween.restart().pause()
        : "";
    });
  }

  function setSurprise(el) {
    var parent = el.parentNode;
    parent.style.position = "relative";
    parent.style.overflow = "hidden";
    el.style.display = "inline-block";
  }
}

const elementInView = (el, offset = 1.25) => {
  const scroll = window.scrollY || window.pageYOffset;
  const boundsTop = el.getBoundingClientRect().top + scroll;

  const viewport = {
    top: scroll,
    bottom: scroll + window.innerHeight,
  };

  const bounds = {
    top: boundsTop,
    bottom: boundsTop + el.clientHeight,
  };

  return (
    (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
    (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
  );
};

animateView(); // Call the animateView function after the HTML elements have loaded
