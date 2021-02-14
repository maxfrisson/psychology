window.addEventListener("scroll", function () {
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function toggle() {
  var menu = document.getElementById("menu");
  var toggle = document.getElementById("toggle");

  menu.classList.toggle("active");
  toggle.classList.toggle("active");
}
