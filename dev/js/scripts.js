import {
    gsap
} from "gsap";

gsap.to('#hero.png', {
    opacity: 1,
    duration: 1,
    ease: 'power1.in'
}).set('#hero.png', {
    visibility: 'visible'
});

gsap.from("#logo", {
    duration: 1,
    alpha: 0,
    delay: 0.5
});

gsap.from("nav li", {
    duration: 1,
    alpha: 0,
    y: "-=25"
});
gsap.from("#hero article", {
    duration: 1.5,
    alpha: 0,
    yPercent: 15
});