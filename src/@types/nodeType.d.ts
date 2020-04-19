import { MutableRefObject } from 'react';
import { Graph } from '@antv/g6';

declare type InitState = {
  visible: boolean;
  title: 'editNode' | 'editEdge' | 'addNode';
};

declare module NodeType {
  type stateType = {
    zoom?: number;
    isEdit?: boolean;
  };
  type graphContextType = {
    ref: MutableRefObject<{
      graph: Graph;
    }>;
    state: MutableRefObject<stateType>;
    bus: any;
  };
}
