import React, { useRef, useContext, useEffect, useLayoutEffect } from 'react';
import { renderG6 } from '../Graph';
import renderGraphItem from './renderGraphItem';
import { graphContext } from './graphContext';

import ToolBar from '../ToolBar';
import { NodeDrawer, NodeContextMenu } from '../EditNode';
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

  useEffect(() => {
    ref.graph.on('edge:click', (ev: any) => {
      const { item, target = {} } = ev;
      const { cfg = {} } = target;
      if (cfg.className === 'addNode') {
        const addId = String(new Date().getTime());
        ref.graph.setAutoPaint(false);
        ref.graph.addItem('node', {
          type: 'circle',
          id: addId,
        });
        ref.graph.addItem('edge', {
          shape: 'editLine',
          source: item.getSource().getModel().id,
          target: addId,
        });
        ref.graph.addItem('edge', {
          shape: 'editLine',
          source: addId,
          target: item.getTarget().getModel().id,
        });
        ref.graph.removeItem(item);
        ref.graph.setAutoPaint(true);
        ref.graph.changeData(ref.graph.save());
      }
    });
  }, []);

  return (
    <div>
      <ToolBar />
      <div ref={GraphRef}>
        <div ref={minimapRef}></div>
      </div>
      <NodeDrawer />
      <NodeContextMenu />
    </div>
  );
};

export default React.memo(RenderGraph);
