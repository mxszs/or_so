import { createBrowserHistory } from '/Users/orso/Desktop/learn/MyDoc/node_modules/_@umijs_runtime@3.0.18@@umijs/runtime/dist/index.js';

let options = {
  "basename": "/"
};
if ((<any>window).routerBase) {
  options.basename = (<any>window).routerBase;
}

let history = createBrowserHistory(options);
export const createHistory = (hotReload = false) => {
  if (!hotReload) {
    history = createBrowserHistory(options);
  }

  return history;
};

// 通常仅微前端场景需要调用这个 API
export const setCreateHistoryOptions = (newOpts: any = {}) => {
  options = { ...options, ...newOpts };
};

export { history };
