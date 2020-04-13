import React, { useRef, useContext, useEffect,  } from 'react';
import { renderG6 } from './Graph';
import { graphContext } from './Graph/graphContext';

import ToolBar from './ToolBar';

import './index.less';

type GraphParams = {};

const RenderGraph: React.FC<GraphParams> = () => {

const {
  ref,
} = useContext(graphContext);
console.log(useContext(graphContext), 'useContext(graphContext)')
  const GraphRef = useRef<HTMLDivElement>(null);
  const minimapRef = useRef(null);

  useEffect(() => {
    if (ref.graph.destroy) {
      ref.graph.destroy()
    } else {
      ref.graph = renderG6(GraphRef, minimapRef);
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


export default React.memo(RenderGraph);
