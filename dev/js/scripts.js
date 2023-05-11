import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//Start Code

gsap.timeline()
function heroAnimation(){
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: "#section-1 h1",
            start:"top 51%",
            end:"center 40%",

        //start:"top 50%",
        //top/bottom targets the element markers
        //percentage targets the viewport markers
            scrub: true,
            markers:false,
            toggleActions: "play none none pause"
        }});
    
        tl.from("#section-1 h1, #section-1 h2",{duration:1, alpha:0, y:100});
        return tl;


}

function aboutAnimation(){
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: "#section-2",
            start:"top 51%",
            end:"center 40%",

        //start:"top 50%",
        //top/bottom targets the element markers
        //percentage targets the viewport markers
            scrub: true,
            markers:false,
            toggleActions: "play none none pause"
        }});
    
        tl.from("#section-2 h1",{duration:1, alpha:0, x:100});
        return tl;


}

function aboutinfoAnimation(){
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: "#section-2 h1",
            start:"top 51%",
            end:"center 40%",

        //start:"top 50%",
        //top/bottom targets the element markers
        //percentage targets the viewport markers
            scrub: true,
            markers:false,
            toggleActions: "play none none pause"
        }});
    
        tl.from("#section-2 p",{duration:1, alpha:0, x:-100});
        return tl;

}

function contacttxtAnimation() {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-3",
        start: "20% 51%",
        end: "80% 80%%",
        scrub: true,
        markers: true,
        toggleActions: "play none none pause"
      }
    });
    

       tl.from("#section-3 h2, #section-3 p", { rotation: 15, duration:5, ease: "elastic.out(3, .2)" });
    return tl;
  
    // { rotation: -20}, {rotation: 0,ease:Elastic. easeOut.config( 5, 0.2)});
  }
  

let mainTl = gsap.timeline();
mainTl.add(heroAnimation())
.add(aboutAnimation())
.add(aboutinfoAnimation())
.add(contacttxtAnimation)
    ;