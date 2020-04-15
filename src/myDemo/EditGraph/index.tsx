import React from 'react';
import GraphContextProvider from './Graph/graphContext';

import Graph from './Graph/Graph';

type GraphParams = {};

const EditGraph = () => {
  return (
    <GraphContextProvider>
      <Graph />
    </GraphContextProvider>
  );
};
export default EditGraph;
