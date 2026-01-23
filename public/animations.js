gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const title = document.querySelector('.title');

ScrollSmoother.create({
    smooth: 2,
    smoothTouch: 0.1,
    effects: true
})

gsap.fromTo("h1, p, button", 
  { 
    opacity: 0, 
    filter: "blur(10px)", 
    y: 50 
  },
  { 
    opacity: 1, 
    filter: "blur(0px)", 
    y: 0,
    duration: 1.3,
    ease: "power2.out",
  }
);

gsap.to(title, {
  backgroundSize: '100%',
  ease: 'none',
  scrollTrigger: {
    trigger: title,
    start: 'top 88%',
    end: 'center 33%',
    scrub: true,
  },
});