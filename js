window.addEventListener("resize", function() {
  var form = document.querySelector(".contact-form");
  var width = window.innerWidth;

  if (width < 768) {
    form.style.flexDirection = "column";
  } else {
    form.style.flexDirection = "row";
  }
});
