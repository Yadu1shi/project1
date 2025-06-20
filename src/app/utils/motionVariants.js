export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 40 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -60 },
  transition: { duration: 0.7, ease: "easeOut" },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 60 },
  transition: { duration: 0.7, ease: "easeOut" },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1},
  transition: { duration: 1.2, ease: "easeOut" },
};


// utils/motionVariants.js

export const fadeInScale = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.3 },
};
