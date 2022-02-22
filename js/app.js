feather.replace();
gsap.registerPlugin();

gsap.timeline({
   scrollTrigger: {
     trigger: ".about",
     start: "top bottom",
     end: "top top",
     scrub: true,
     duration: 1
   },
   defaults: { ease: Power3.easeInOut }
 })
 .from(".about .tag", {y: -100})
 .from(".about .tag__underline", {scaleX: 0});

gsap.timeline({
  scrollTrigger: {
    trigger: ".method",
    start: "top bottom",
    end: "top top",
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
    end: "top top",
    scrub: true,
    duration: 1
  },
  defaults: { ease: Power3.easeInOut }
})
.from(".project .tag", {y: -100})
.from(".project .tag__underline", {scaleX: 0});

const logo = document.querySelector('.logo-full');
const nav = document.querySelector('.offscreen-nav');

logo.addEventListener('click', e => {
  e.preventDefault;
  if (nav.classList.contains('active')) {
    nav.classList.remove('active');
    
    return;
  } else {
    nav.classList.add('active')
  }
})