import "@testing-library/jest-dom";

if (!globalThis.requestAnimationFrame) {
  globalThis.requestAnimationFrame = (callback) => setTimeout(callback, 0);
}
