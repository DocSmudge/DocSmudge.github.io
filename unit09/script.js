// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   direction: "horizontal",
//   speed: 2000,
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   autoplay: {
//     delay: 5000,
//   },
// });
// console.log(Swiper);

function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");

x.onclick = toggleMenu;
