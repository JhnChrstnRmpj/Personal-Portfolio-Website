document.addEventListener("mousemove", function(event) {
  var x = event.pageX;
  var y = event.pageY;
  
  var cursor = document.querySelector(".custom-cursor");
  cursor.style.display = "block";
  cursor.style.transform = "translate(" + (x - 10) + "px, " + (y - 10) + "px)";
});
