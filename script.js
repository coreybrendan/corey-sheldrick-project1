// Making the hamburger menu icon change to an x icon 

// save ham menu icon in a variable
const hamburgerMenu = document.querySelector('.fa-bars');
// add event listener upon user click
hamburgerMenu.addEventListener('click', function(e) {
  if (e.target.tagName === "I") {
    hamToX(e.target);
  }
});

// define hamToX function
function hamToX(iElement) {
  // toggle icon element from hamburger to x
  iElement.classList.toggle('fa-square');
  iElement.classList.toggle('fa-times');
};

// Code below was an incomplete carousel attempt. Started to feel like this mission was a over my current JavaScript skills...

// variables:
// const carouselContainer = document.querySelector('.carousel-track');
// const carouselPhotos = Array.from(carouselContainer.children);
// // console.log(carouselPhotos);
// const rightArrow = document.querySelector('.fa-angle-right');
// const leftArrow = document.querySelector('.fa-angle-left');

// pseudoooo code!!!
// register user click on right arrow
// rightArrow.addEventListener('click', function () {
//   console.log("IS RIGHT WORKING???");

// });

// register user click on left arrow
// leftArrow.addEventListener('click', function () {
//   console.log("IS LEFT WORKING???");
  
// });

// const byePhoto = () => {

// }