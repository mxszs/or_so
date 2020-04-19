import React, { useRef, useContext, useEffect, useLayoutEffect } from 'react';
import { renderG6 } from '../Graph';
import renderGraphItem from './renderGraphItem';
import { graphContext } from './graphContext';

import ToolBar from '../ToolBar';
import { NodeDrawer, NodeContextMenu, AddNode } from '../EditNode';
import './index.less';

type GraphParams = {};

const RenderGraph: React.FC<GraphParams> = () => {
  const {
    ref: { current: ref },
    state: { current: initState },
    bus: { current: bus },
  } = useContext(graphContext);

  const GraphRef = useRef<HTMLDivElement>(null);
  const minimapRef = useRef(null);

  useLayoutEffect(() => {
    if (ref.graph) {
      ref.graph.destroy();
    } else {
      ref.graph = renderG6(GraphRef, minimapRef);
    }
    return () => {
      ref.graph.destroy();
      ref.graph = null;
      initState.isEdit = false;
    };
  }, []);

  useEffect(() => {
    renderGraphItem(initState);
  }, []);

  useEffect(() => {
    const test = () => console.log(111);
    bus.addEventListener('show', test);
    return () => {
      bus.removeEventListener('show', test);
    };
  }, []);

  return (
    <div>
      <ToolBar />
      <div style={{ position: 'relative' }} ref={GraphRef}>
        <div ref={minimapRef}></div>
        <NodeContextMenu />
      </div>
      <NodeDrawer />
      <AddNode />
    </div>
  );
};

export default React.memo(RenderGraph);
