feather.replace();

butter.init({
   wrapperId: 'butter',
   cancelOnTouch: true,
   wrapperDamper: 0.06
});

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
 .from(".about .tag__underline", {scaleX: 0})
// .fromTo(".tag", { y: -100 }, { y: 0 });