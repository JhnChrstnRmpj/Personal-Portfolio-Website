// Declaration
const initialWidth = window.innerWidth;

const getAllElement = (params, func) => {
  let arr = document.querySelectorAll(params);
  arr.forEach((element) => {
    func(element);
  });
};

function hideElement(element) {
  if (Array.isArray(element)) {
    Array.from(element).forEach((el) => {
      return (el.style.display = "none");
    });
  } else {
    return (element.style.display = "none");
  }
}
const removeClass = (params, _class) => {
  params.classList.remove(_class);
};
//?delay function
function delay(func, delay) {
  setTimeout(func, delay * 1000);
}

//? returns number string with commas
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
//? string to array
stringToArray = function (str) {
  return str.trim().split(" ");
};

//? detect element is Inview
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

//? responsive iframe handle
(function (window, document, undefined) {
  var players = ['iframe[src*="youtube.com"]', 'iframe[src*="vimeo.com"]'];
  var fitVids = document.querySelectorAll(players.join(","));

  if (fitVids.length) {
    // Loop through videos
    for (var i = 0; i < fitVids.length; i++) {
      // Get Video Information
      var fitVid = fitVids[i];
      var width = fitVid.getAttribute("width");
      var height = fitVid.getAttribute("height");
      var aspectRatio = height / width;
      var parentDiv = fitVid.parentNode;

      // Wrap it in a DIV
      var div = document.createElement("div");
      div.className = "videoWrapper";
      div.style.paddingBottom = aspectRatio * 100 + "%";
      parentDiv.insertBefore(div, fitVid);
      fitVid.remove();
      div.appendChild(fitVid);

      // Clear height/width from fitVid
      fitVid.removeAttribute("height");
      fitVid.removeAttribute("width");
    }
  }
})(window, document);

//? handle mobile view on landscape
function mobileLandscapeHandler() {
  var mobileLandscapeHandler = document.querySelector(".mobileLandscape");
  var orientation =
    (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;

  if (initialWidth <= 600) {
    if (orientation === "landscape-primary" || orientation === "landscape-secondary") {
      mobileLandscapeHandler.style.display = "flex";
    } else {
      mobileLandscapeHandler.style.display = "none";
    }
  }
}
var btnFileUpload = Array.from(document.querySelectorAll(".btnFileUpload"));

btnFileUpload.forEach((element) => {
  var imgHolder = element.parentElement;
  element.addEventListener(
    "change",
    () => {
      var file = element.files[0];
      var reader = new FileReader();
      reader.onloadend = function () {
        imgHolder.style.background =
          "url(" + reader.result + ") center center/cover no-repeat";
      };
      if (file) {
        reader.readAsDataURL(file);
      }
      imgHolder.classList.add("has-image");
    },
    true
  );
});

// function animateBeforeUnload() {
//   var anchorArray = Array.from(document.getElementsByTagName("a"));
//   var preloader = document.querySelector(".preloader");
//   anchorArray.forEach((anchor) => {
//     anchor.addEventListener("click", function (event) {
//       var attr = anchor.getAttribute("href");
//       var target = anchor.hasAttribute("target");
//       if (attr != "#" && !target) {
//         event.preventDefault();
//         gsap.to(preloader, 0.5, {
//           autoAlpha: 1,
//           ease: "expo.in",
//           onComplete: function () {
//             location.href = attr;
//           },
//         });
//       }
//     });
//   });
// }.

window.addEventListener("scroll", function () {
  //   showAppBar();
});

// window.addEventListener("load", function () {
//   preloader();
// });

// window.addEventListener("beforeunload", function (event) {
//   window.scrollTo(0, 0);
// });

// window.addEventListener("orientationchange", function () {
//   if (onLandingPage) mobileLandscapeHandler();
// });

window.addEventListener("resize", function () {
  // ? Desktop Reload on resize
  // !isMobile && onLandingPage ? (window.location.href = window.location.href) : "";
});

document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".myCarousel");

  carousels.forEach((element, i) => {
    const flickityName = `flickity${i}`;
    window[flickityName] = new Flickity(element, {
      autoPlay: false,
      pauseAutoPlayOnHover: true,
      pageDots: false,
      draggable: false,
      selectedAttraction: 0.015,
      friction: 0.25,
      initialIndex: 0,
      wrapAround: true,
      prevNextButtons: false,
      cellAlign: "left",
      imagesLoaded: true,
      adaptiveHeight: true,
    });

    if (element.classList.contains("withNav")) {
      const nav = element.nextElementSibling;
      const btnPrev = nav.querySelector(`.btnPrevCarousel`);
      const btnNext = nav.querySelector(`.btnNextCarousel`);

      btnPrev.addEventListener("click", (event) => {
        event.preventDefault();
        window[flickityName].previous();
      });
      btnNext.addEventListener("click", (event) => {
        event.preventDefault();
        window[flickityName].next();
      });
      window[flickityName].x = 0;
    }
  });

  // animateBeforeUnload();
});

//footer animation
const box = document.querySelector(".boxFt");
const footerContent = document.querySelector("footer");

footerContent.addEventListener("mouseenter", startAnimation);
footerContent.addEventListener("mouseleave", stopAnimation);

function stopAnimation() {
  box.style.animation = "none";
}

function startAnimation() {
  box.style.animation = "shake-animation 4.72s ease infinite";
}
