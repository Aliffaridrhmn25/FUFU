const navbar1 = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    navbar1.classList.add("navbar-scrolled");
  } else {
    navbar1.classList.remove("navbar-scrolled");
  }
});

// Script Navbar JavaScript //

const navbar = document.querySelector("nav ul");
const burger = document.getElementById("image");

burger.addEventListener("click", function () {
  navbar.classList.toggle("show");

  // Tambahkan atau hapus atribut custom berdasarkan keberadaan kelas "show"
  const isNavVisible = navbar.classList.contains("show");
  navbar.setAttribute("data-visible", isNavVisible.toString());
});

// Menutup navbar jika di luar area navbar diklik
document.addEventListener("click", function (event) {
  if (!event.target.closest("nav") && navbar.classList.contains("show")) {
    navbar.classList.remove("show");
    navbar.setAttribute("data-visible", "false");
  }
});

// Mencegah event click pada navbar memicu penutupan navbar
navbar.addEventListener("click", function (event) {
  event.stopPropagation();
});
