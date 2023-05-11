import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//Start Code

gsap.timeline()
function heroAnimation(){
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: "#cookies",
            start:"top 0%",
            end:"bottom 50%",
            scrub: true,
            markers:true
        }});
    
        tl.from("#cookies",{duration:5, alpha:0.5, y:300});
        return tl;


}


let mainTl = gsap.timeline();
mainTl.add(heroAnimation())
    ;