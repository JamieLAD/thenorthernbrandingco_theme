feather.replace();
gsap.registerPlugin();

gsap.timeline({
   scrollTrigger: {
     trigger: ".about",
     start: "top bottom",
     end: "+=1000px",
     scrub: true,
     duration: 5,
     delay: 0.25
   },
   defaults: { ease: Power3.easeInOut }
 })
 .from(".about .tag", {y: -100})
 .from(".about .tag__underline", {scaleX: 0});

gsap.timeline({
  scrollTrigger: {
    trigger: ".method",
    start: "top bottom",
    end: "+=1000px",
    scrub: true,
    duration: 1
  },
  defaults: { ease: Power3.easeInOut }
})
.from(".method .tag", {y: -100})
.from(".method .tag__underline", {scaleX: 0});

gsap.timeline({
  scrollTrigger: {
    trigger: ".project",
    start: "top bottom",
    end: "+=1000px",
    scrub: true,
    duration: 1
  },
  defaults: { ease: Power3.easeInOut }
})
.from(".project .tag", {y: -100})
.from(".project .tag__underline", {scaleX: 0});

gsap.timeline({
  scrollTrigger: {
    trigger: ".synth",
    start: "top bottom",
    end: "top top",
    scrub: true,
    duration: 1
  },
  defaults: { ease: Power3.easeInOut }
})
.from(".synth .tag", {y: -100})
.from(".synth .tag__underline", {scaleX: 0});

const logo = document.querySelector('.logo-full');
const nav = document.querySelector('.offscreen-nav');
const links = document.querySelectorAll('.offscreen-nav__link');

logo.addEventListener('click', e => {
  e.preventDefault();
  openCloseNav();
})

links.forEach(link => {
  link.addEventListener('click', e => {
    openCloseNav();
  });
})

function openCloseNav() {
  if (nav.classList.contains('active')) {
    nav.classList.remove('active');
    
    return;
  } else {
    nav.classList.add('active')
  }
}

gsap.timeline({
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    duration: 1
  },
  defaults: { ease: Power1.easeInOut }
})
.from(".scroller__progress", {scaleY: 0});