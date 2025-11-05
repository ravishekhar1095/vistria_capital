export const fadeInUp = (delay = 0, amount = 0.25) => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      delay,
      ease: [0.22, 0.61, 0.36, 1],
    },
  },
  viewport: { once: true, amount },
});

export const simpleFade = (delay = 0, amount = 0.3) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay,
      ease: 'easeOut',
    },
  },
  viewport: { once: true, amount },
});
