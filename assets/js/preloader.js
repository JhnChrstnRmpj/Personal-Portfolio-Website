const preloadImages = (imageUrls) => {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

// Example usage
preloadImages([
  '/assets/images/me/aboutme-1.JPG',
  '/assets/images/me/aboutme-2.JPG',
  '/assets/images/me/aboutme-3.JPG',
  '/assets/images/me/aboutme-4.JPG',
  '/assets/images/me/aboutme-5.JPG',
  '/assets/images/me/aboutme-6.JPG',
]);
