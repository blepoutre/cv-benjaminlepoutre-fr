// src/utils/sectionCounter.ts

export const counter = {
  current: 1,
  next() {
    return String(this.current++).padStart(2, "0");
  },
  reset() {
    this.current = 1;
  },
};
