import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools, MorphSVGPlugin);

//INIT
//gsap.set("#SOHO", {scaleY:0.5});

function blocksAnimation(){
    let tl = gsap.timeline();

    //entire logo comes down
    tl.from("#soho", {duration:1, y:"-=500", ease: "expo.out"});

    //blocks split
    tl.from("#o-1", {duration:0.5, x: "-=175", ease: "none" }, "move")
    tl.from("#H", {duration:0.5, x: "-=345", ease: "none" },"move+=.05")
    tl.from("#o-2", {duration:0.5, x: "-=515", ease: "none" },"move+=.1")

    //yellow blocks grow
    tl.from("#bottom-s-block", {duration: 0.2, scaleX:0, ease: "none", transformOrigin: "left" }, "grow+=0.5")
    tl.from("#top-s-block", {duration: 0.2, scaleX:0, ease: "none", transformOrigin: "right" }, "grow+=0.5")
    tl.from("#o-1-block, #o-2-block", {duration: 0.2, scaleX:0, ease: "none", transformOrigin: "center" }, "grow+=0.5")
    tl.from("#top-h-block", {duration: 0.2, scaleX:0, ease: "none", transformOrigin: "top" }, "grow+=0.5")    
    tl.from("#bottom-h-block", {duration: 0.2, scaleX:0, ease: "none", transformOrigin: "bottom" }, "grow+=0.5")    




    return tl;
}

function splitAnimation(){
    let tl = gsap.timeline();

    tl.from("#redefine", {duration:0.3, x: "-=400", ease: "none"}, "split+=0.5");
    
    //soho moves to the left
    tl.from("#soho", {duration:0.3, x: "+=175", ease: "none" }, "split+=0.5")

    return tl;
}



let mainTL = gsap.timeline();
mainTL.add(blocksAnimation())
mainTL.add(splitAnimation())

// mainTL.from("soho", {duration:1, y:50})


;

GSDevTools.create();