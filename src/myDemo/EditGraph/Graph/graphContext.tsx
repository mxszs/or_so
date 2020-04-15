import React, {
  createContext,
  useRef,
  MutableRefObject,
  useState,
} from 'react';
import { Graph } from '@antv/g6';
import eventBus from '@/myDemo/util/eventBus';

type graphContextType = {
  ref: MutableRefObject<{
    graph: Graph;
  }>;
  state: MutableRefObject<{
    zoom?: number;
    isEdit?: boolean;
  }>;
  bus: any;
};

export const graphContext = createContext<graphContextType>(null);

const GraphContextProvider: React.FC<{
  initState?: {
    ref?: {
      graph: Graph;
    };
    state?: {
      zoom?: number;
      isEdit?: boolean;
    };
  };
}> = ({ children, initState = {} }) => {
  const initRef = Object.assign({}, { graph: null }, initState.ref);
  const ref = useRef(initRef);
  const initstate = Object.assign(
    {},
    {
      zoom: 1,
      isEdit: false,
    },
    initState.state,
  );

  const state = useRef(initstate);

  const bus = useRef(eventBus);

  return (
    <graphContext.Provider
      value={{
        ref,
        state,
        bus,
      }}
    >
      {children}
    </graphContext.Provider>
  );
};
export default GraphContextProvider;
