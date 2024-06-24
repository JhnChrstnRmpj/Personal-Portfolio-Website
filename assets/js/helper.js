// HELPERS
const isMobileFunc = () => {
  return window.innerWidth <= 900;
};

const onLandingPageFunc = () => {
  if (location.pathname === "/index.html") window.location = window.location.origin;
  return location.pathname === "/";
};

const allowScrollFunc = () => {
  window.document.body.style.cssText = "overflow-y: initial";
};

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const inputCountLimiter = (value, limit) => {
  if (value.length == limit) {
    return true;
  }
  return false;
};
const notBlank = (params) => {
  if (params != null && params != undefined && params != "") {
    return true;
  }
  return false;
};

const uppercaseWords = (str) => {
  return str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());
};

function isNumber(event) {
  event = event ? event : window.event;
  var charCode = event.which ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}
function isLetter(char) {
  return /[a-zA-Z]/.test(char);
}
