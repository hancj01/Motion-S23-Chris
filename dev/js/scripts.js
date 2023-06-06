import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools, MorphSVGPlugin);


function glassesAnimation(){
    let tl = gsap.timeline();

    //glasses are drawn
    tl.from("#green-oval", {drawSVG:"0%", duration: 1, ease: "none", transformOrigin: "top"}, "draw");
    tl.from("#blue-circle", {drawSVG:"0%", duration: 1, ease: "none", transformOrigin: "top"}, "draw");

    //

    return tl;
}

function faceAnimation(){
    let tl = gsap.timeline();

    //glasses are drawn
    tl.from("#right-eye", {duration: 2, scaleX:0, ease: "elastic.out", transformOrigin: "center"}, "open");
    tl.from("#left-eye", {duration: 2, scaleX:0, ease: "elastic.out", transformOrigin: "center"}, "open");

    return tl;
}

//tl.from("#bottom-s-block", {duration: 0.2, scaleX:0, ease: "none", transformOrigin: "left" }, "grow")

let mainTL = gsap.timeline();
mainTL.add(glassesAnimation())
mainTL.add(faceAnimation())

;

GSDevTools.create();