import { gsap } from "gsap";

//QUIZ

//Part 1

gsap.timeline()

.from("box red", { duration: 1, x: 0, ease: "power1.out"})
.from("box blue", {duration: 1, x: 350, ease:"power1.out"})
;
