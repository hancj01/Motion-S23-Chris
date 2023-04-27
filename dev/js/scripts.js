import { gsap } from "gsap";


//Timeline
let mainTl = gsap.timeline();

mainTl.from("#logo", {
    duration: 3,
    alpha: 0
  })
  .from("#nav-li", {
    duration: 1,
    alpha: 0,
    y: "-=25"
  }, "<")
  .from("#hero article", {
    duration: 1.5,
    alpha: 0,
    yPercent: 15
  }, "<");


function heroAnimation(){
  let tl = gsap.timeline();

  tl.to("#agape", { 
    duration: 1.5,
    x: '0%',
    autoAlpha: 1,
    ease: 'power3.out'})

    .to("#agape", {
    duration: 0.75,
    x: '50%',
    autoAlpha: 1,
    ease: 'power3.out',
    onComplete: function() {
      gsap.to("#agape", {
        duration: 0.90,
        x: '0%',
        ease: 'power3.out'})
      }
    });
    return tl;
}

heroAnimation();

// mainTl.from("#logo", {duration:3, alpha: 0})
//   .addLabel("beginning")
//   .from("#nav-li", {duration:1, alpha:0, y: "-=25", position: "beginning"})
//   .from("#hero article", {
//     duration: 1.5,
//     alpha: 0,
//     yPercent: 15,
//     position: "beginning"
// });



// gsap.to("#agape", {
  // duration: 1.5,
  // x: '0%',
  // autoAlpha: 1,
  // ease: 'power3.out'
// });

// gsap.to("#agape", {
  // duration: 0.75,
  // x: '50%',
  // autoAlpha: 1,
  // ease: 'power3.out',
  // onComplete: function() {
  //   gsap.to("#agape", {
  //     duration: 0.90,
  //     x: '0%',
  //     ease: 'power3.out'
//     });
//   }
// });

// gsap.to("#bread", {
//   duration: 0.75,
//   x: '-50%',
//   autoAlpha: 1,
//   ease: 'power3.out',
//   onComplete: function() {
//     gsap.to("#bread", {
//       duration: 0.90,
//       x: '0%',
//       ease: 'power3.out'
//     });
//   }
// });

// gsap.to("button", {duration:.5, rotation:"720_cw", delay:2})


//# is for id name 
//. is for class