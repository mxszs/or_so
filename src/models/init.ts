import React, { useState } from 'react';

const useInit = () => {
  const [count, setCount] = useState(11);

  const plusCount = () => {
    setCount(value => value + 1);
  };

  const reduceCount = () => {
    setCount(value => value - 1);
  };

  return {
    count,
    plusCount,
    reduceCount,
  };
};

export default useInit;
