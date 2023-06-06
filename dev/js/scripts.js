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
    tl.from("#soho", {duration:1, y:"-=500", ease: "none"});

    //blocks split
    tl.from("#o-1", {duration:0.2, x: "-=175", ease: "none" })
    tl.from("#H", {duration:0.2, x: "-=345", ease: "none" },"-=0.1")
    tl.from("#o-2", {duration:0.2, x: "-=515", ease: "none" },"-=0.1")

    return tl;
}

function textAnimation(){
    let tl = gsap.timeline();

    tl.from("#redefine", {duration:0.2, x: "-=400", ease: "none"});

    return tl;

}



let mainTL = gsap.timeline();
mainTL.add(blocksAnimation())
mainTL.add(textAnimation())

// mainTL.from("soho", {duration:1, y:50})


;

GSDevTools.create();