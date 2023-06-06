import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools, MorphSVGPlugin);


function glassesAnimation(){
    let tl = gsap.timeline();

    //glasses are drawn
    tl.from("#green-oval", {drawSVG:"0%", duration: 2, ease: "none", transformOrigin: "top"}, "draw");
    tl.from("#blue-circle", {drawSVG:"0%", duration: 2, ease: "none", transformOrigin: "top"}, "draw");

    return tl;
}


let mainTL = gsap.timeline();
mainTL.add(glassesAnimation())


;

GSDevTools.create();