import { useEffect, useContext, useRef, useState } from 'react';
import Provider, { Model } from './Provider';
import Context from './Context';

type UseModelFn = <T extends keyof Model<T>>(namespace: T) => Model<T>[T];

const useModel: UseModelFn = namespace => {
  const dispatcher = useContext<any>(Context);
  // 判断组件是否挂载
  const isMount = useRef(false);
  const [state, setState] = useState(dispatcher.data[namespace]);

  useEffect(() => {
    isMount.current = true;
    return () => {
      isMount.current = false;
    };
  }, []);

  useEffect(() => {
    const handler = (value: any) => {
      if (!isMount.current) {
        // 如果函数执行中，组件被卸载，则强制更新全局 data
        setTimeout(() => {
          dispatcher.data[namespace] = value;
          dispatcher.update(namespace);
        });
      } else {
        setState(value);
      }
    };
    try {
      dispatcher.callBacks[namespace].add(handler);
      dispatcher.update(namespace);
    } catch (e) {
      dispatcher.callBacks[namespace] = new Set();
      dispatcher.callBacks[namespace].add(handler);
      dispatcher.update(namespace);
    }
    return () => {
      dispatcher.callBacks[namespace].delete(handler);
    };
  }, [namespace]);

  return state;
};
export { useModel, Provider, Context };
