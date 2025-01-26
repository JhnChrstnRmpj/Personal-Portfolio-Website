const preloadImages = (imageUrls) => {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

// Example usage
preloadImages([
  './assets/images/me/about-me-1.JPG',
  './assets/images/me/about-me-2.JPG',
  './assets/images/me/about-me-3.JPG',
  './assets/images/me/about-me-4.JPG',
  './assets/images/me/about-me-5.JPG',
  './assets/images/me/about-me-6.JPG',
]);
