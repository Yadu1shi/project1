// utils/gsapAnimations.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Fade-in animation from bottom to top on scroll
 * @param {Element | NodeList} target - Single element or a list of elements
 * @param {Object} options - Optional config overrides
 */
export const fadeInOnScroll = (targets) => {
  targets.forEach((target) => {
    gsap.fromTo(
      target,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: target,
          start: "top 80%",
          toggleActions: "play reverse play reverse", // 👈 works both ways
        },
      }
    );
  });
};
