import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools, MorphSVGPlugin);


function glassesAnimation(){
    let tl = gsap.timeline();

    //glasses are drawn
    tl.from("#green-oval", {drawSVG:"0%", duration: 1, ease: "none"}, "draw");
    tl.from("#blue-circle", {drawSVG:"0%", duration: 1, ease: "none"}, "draw");

    //glasses arms are drawn
    tl.from("#green-arm", {drawSVG:"0%", duration: 0.7, ease: "none", transformOrigin: "left"}, "draw2");
    tl.from("#blue-arm", {drawSVG:"0%", duration: 0.7, ease: "none", transformOrigin: "right"}, "draw2");
    return tl;
}

function eyesAnimation(){
    let tl = gsap.timeline();

    //eyes appear
    tl.from("#right-eye", {duration: 1, scaleY:0, ease: "elastic.out(1, 0.5)", transformOrigin: "center"}, "open");
    tl.from("#left-eye", {duration: 1, scaleY:0, ease: "elastic.out(1, 0.5)", transformOrigin: "center"}, "open");

    return tl;
}

function smileAnimation(){
    let tl = gsap.timeline();

    gsap.set("#smile-all", { transformOrigin: "top" });

    //smile swings in
    tl.from("#smile-all", {duration:0.75, rotate:135, ease:"elastic.out(.7, 1)" });

    return tl;
}

function blinkAnimation(){
    let tl = gsap.timeline({ repeat: 3, yoyo: true });

    tl.to("#eyes", { scaleY: 0, duration: .2, ease: "power1.inOut", transformOrigin: "center"});
    return tl;
}


//tl.from("#bottom-s-block", {duration: 0.2, scaleX:0, ease: "none", transformOrigin: "left" }, "grow")

let mainTL = gsap.timeline();
mainTL.add(glassesAnimation())
mainTL.add(eyesAnimation())
mainTL.add(smileAnimation())
mainTL.add(blinkAnimation())
;

GSDevTools.create();