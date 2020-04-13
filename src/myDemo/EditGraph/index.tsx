import React, { useEffect, useRef } from 'react';
import { Graph } from '@antv/g6';
import { renderG6 } from './Graph';
import ToolBar from './ToolBar';

import './index.less';

type GraphParams = {};

const RenderGraph: React.FC<GraphParams> = () => {
  const GraphRef = useRef<HTMLDivElement>(null);
  const minimapRef = useRef(null);
  const graphContext = useRef<{ graph: Graph }>({ graph: {} as Graph });

  useEffect(() => {
    if (graphContext.current.graph.destroy) {
      graphContext.current.graph.destroy();
    } else {
      graphContext.current.graph = renderG6(GraphRef, minimapRef);
    }
  }, []);

  return (
    <div>
      <ToolBar />
      <div ref={GraphRef}>
        <div ref={minimapRef}></div>
      </div>
    </div>
  );
};

export default RenderGraph;
