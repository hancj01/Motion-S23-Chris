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
  
    let tl = gsap.timeline({delay:1});
    let mm = gsap.matchMedia();


    mm.add("(max-width: 767px)", () =>{
    tl.to("#agape", { 
      duration: 1,
      x: '50%',
      autoAlpha: 1,
      ease: 'power3.out'
    })

      .to("#bread", {
      duration: 1,
      x: '-50%',
      autoAlpha: 1,
      ease: 'power3.out'
    }, 0)

    .to("#agape", {
      duration: 0.90,
      x: '0%',
      ease: 'power3.out'
    })

    .to("#bread", {
      duration: 0.90,
      x: '0%',
      ease: 'power3.out'
    }, "<")
    
    .to("button", {
    duration:.2,
    scale: 1.2,
    ease: "power1.inOut",
    yoyo: true,
    repeat: 3})
    ;
  });

  mm.add("(min-width: 768px)", () =>{
    tl.to("#agape", { 
      duration: 1.5,
      x: '50%',
      autoAlpha: 1,
      ease: 'power3.out'
    })

      .to("#bread", {
      duration: 1.5,
      x: '-50%',
      autoAlpha: 1,
      ease: 'power3.out'
    }, 0)

    .to("#agape", {
      duration: 0.90,
      x: '0%',
      ease: 'power3.out'
    })

    .to("#bread", {
      duration: 0.90,
      x: '0%',
      ease: 'power3.out'
    }, "<")
    
    .to("button", {duration:.5, rotation:"720_cw"})
   
    ;
  });
  
    return tl;
  }
  
 

  

  
  

  heroAnimation();

// function heroAnimation(){
//   let tl = gsap.timeline();

//   tl.to("#agape", { 
//     duration: 1.5,
//     x: '0%',
//     autoAlpha: 1,
//     ease: 'power3.out'})

//     .to("#agape", {
//     duration: 0.75,
//     x: '50%',
//     autoAlpha: 1,
//     ease: 'power3.out',
//     onComplete: function() {
//       gsap.to("#agape", {
//         duration: 0.90,
//         x: '0%',
//         ease: 'power3.out'})
//       }
//     }, 0)

//     //#agape is glitching back for some reason...
    
//     .to("#bread", {
//       duration: 0.75,
//       x: '-50%',
//       autoAlpha: 1,
//       ease: 'power3.out',
//       onComplete: function() {
//         gsap.to("#bread", {
//           duration: 0.90,
//           x: '0%',
//           ease: 'power3.out'
//         });
//       }
//     }, 0)

//     ;
//     return tl;
// }



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