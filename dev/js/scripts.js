import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//Start Code

gsap.timeline()
function heroAnimation(){
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: "#section-1 h1",
            start:"top 50%",
            end:"bottom 40%",

        //start:"top 50%",
        //top/bottom targets the element markers
        //percentage targets the viewport markers
            scrub: true,
            markers:true,
            toggleActions: "play none"
        }});
    
        tl.from("#section-1 h1, #section-1 h2",{duration:1, alpha:0, y:100});
        return tl;


}


let mainTl = gsap.timeline();
mainTl.add(heroAnimation())
    ;