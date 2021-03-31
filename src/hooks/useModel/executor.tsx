import React, { useEffect, useMemo, useRef } from 'react';

type ExecutorProps = {
  hook: () => void;
  namespace: string;
  onUpdate: (value: any) => void;
};

const Executor: React.FC<ExecutorProps> = ({ hook, namespace, onUpdate }) => {
  const updateRef = useRef(onUpdate);
  updateRef.current = onUpdate;

  const initRef = useRef(false);

  let data: any;

  try {
    if (typeof hook === 'function') {
      data = hook();
    } else {
      data = null;
    }
  } catch (e) {
    throw new TypeError(e);
  }

  // 初始化时执行一次
  useMemo(() => {
    updateRef.current(data);
    initRef.current = false;
  }, []);

  useEffect(() => {
    if (initRef.current) {
      updateRef.current(data);
    } else {
      initRef.current = true;
    }
  });

  return <></>;
};

export default Executor;
