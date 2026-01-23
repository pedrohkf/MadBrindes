gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const title = document.querySelector('.title');

ScrollSmoother.create({
    smooth: 2,
    smoothTouch: 0.2,
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
    duration: 1.5,
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

gsap.from("#sobre .flex-col.flex-1", {
  x: -50,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#sobre",
    start: "top 70%", 
  }
});

gsap.from("#sobre img", {
  x: 200,
  opacity: 0,
  scale: 0.9,
  duration: 2.5,
  ease: "expo.out",
  scrollTrigger: {
    trigger: "#sobre",
    start: "top 40%",
  }
});

gsap.from("#seguranca .group", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#seguranca",
    start: "top 80%", 
  }
});

gsap.from(".catalog", {
  width: "80%",
  opacity: 0,
  duration: 1.5,
  ease: "expo.out",
  scrollTrigger: {
    trigger: ".catalog",
    start: "top 90%",
  }
});

gsap.from("#produtos", {
  y: 40,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#produtos",
    start: "top 85%",
  }
});