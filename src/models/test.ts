import React from 'react';

const useTest = () => {
  const [number] = React.useState(22222);

  return {
    number,
  };
};

export default useTest;
