const navbar = document.querySelector(".navbar");
const burgermenu = document.querySelector(".burger-menu");

burgermenu.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
