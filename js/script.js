var toggleBtn = document.querySelector('.burger');
var navbar = document.querySelector('.navbar');
var aLinks = document.querySelectorAll('.a-links');
var navItems = document.querySelector('.nav-item');
var btnItm  = document.querySelectorAll('.btn-item');
var navLinks = document.querySelectorAll('.nav-links');
var menuBtn = document.querySelector('.menu-items');
var contentResume = document.querySelector('.content-resume');
var content = document.querySelectorAll('#content-edu, #content-work, #content-skill');

for (let i = 0; i < btnItm.length; i++) {
  btnItm[i].addEventListener("click", function(){
    menuBtn.querySelector(".active-btn").classList.remove('active-btn');
    btnItm[i].classList.add('active-btn');
    contentResume.querySelector('.active').classList.remove('active');
    content[i].classList.add('active');
  })  
}
toggleBtn.addEventListener("click", function(){
  navItems.classList.toggle('menu-nav');
})

for (let i = 0; i < aLinks.length; i++) {
  aLinks[i].addEventListener("click", function(event){
    navItems.querySelector(".active-nav").classList.remove("active-nav");
    event.target.classList.add('active-nav');
    navItems.classList.toggle('menu-nav');
    smothScroll(event);
  })
}
function smothScroll(event){
  event.preventDefault();
  const target = event.currentTarget.getAttribute("href");
  window.scrollTo({
    top: document.querySelector(target).offsetTop,
    behavior: 'smooth'
  });
}

var headSlide = document.querySelectorAll('.head-slide');
var headerSlide = document.querySelector('.header-slide');
var dot = document.querySelectorAll('.dot');
var dotSlide = document.querySelector('.dot-slide');
var slide = document.querySelectorAll('.slide');
var contentSlide = document.querySelector('.content-slide')

for (let i = 0; i < headSlide.length; i++) {
   headSlide[i].addEventListener("click", function(){
     headerSlide.querySelector('.active-head').classList.remove('active-head');
     headSlide[i].classList.add('active-head');    
     contentSlide.querySelector('.active-slide').classList.remove('active-slide');
     slide[i].classList.add('active-slide');
     dotSlide.querySelector('.active-dot').classList.remove('active-dot');
     dot[i].classList.add('active-dot');
    })
    dot[i].addEventListener("click", function(){
      contentSlide.querySelector('.active-slide').classList.remove('active-slide');
      slide[i].classList.add('active-slide');
      dotSlide.querySelector('.active-dot').classList.remove('active-dot');
      dot[i].classList.add('active-dot');
      headerSlide.querySelector('.active-head').classList.remove('active-head');
      headSlide[i].classList.add('active-head');
    })
}
