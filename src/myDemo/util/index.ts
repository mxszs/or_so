// 防抖
let timer: any = null;
export const debounce = (cb = () => {}, wait = 450) => {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    cb();
  }, wait);
};
// 节流
let run = true;
export const throttle = (cb = () => {}, delay = 450) => {
  if (!run) return;
  run = false;
  setTimeout(() => {
    cb();
    run = true;
  }, delay);
};
