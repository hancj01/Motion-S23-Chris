import { gsap } from "gsap";

gsap.from("#logo", {
    duration: 4,
    alpha: 0
    
});

gsap.from("nav li", {
  duration: 1,
  alpha: 0,
  y: "-=25",
  delay: 1
});

gsap.from("#hero article", {
    duration: 1.5,
    alpha: 0,
    yPercent: 15
});

gsap.to("#agape", {
  duration: 1.5,
  x: '0%',
  autoAlpha: 1,
  ease: 'power3.out'
});

gsap.to("#agape", {
  duration: 0.75,
  x: '50%',
  autoAlpha: 1,
  ease: 'power3.out',
  onComplete: function() {
    gsap.to("#agape", {
      duration: 0.90,
      x: '0%',
      ease: 'power3.out'
    });
  }
});

gsap.to("#bread", {
  duration: 0.75,
  x: '-50%',
  autoAlpha: 1,
  ease: 'power3.out',
  onComplete: function() {
    gsap.to("#bread", {
      duration: 0.90,
      x: '0%',
      ease: 'power3.out'
    });
  }
});

gsap.to("button", {duration:.5, rotation:"720_cw", delay:2})

//# is for id name 
//. is for class