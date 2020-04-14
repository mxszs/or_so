import React, { useRef, useContext, useEffect,  } from 'react';
import { renderG6 } from '../Graph';
import renderGraphItem from './renderGraphItem';
import { graphContext } from './graphContext';

import ToolBar from '../ToolBar';

import './index.less';

type GraphParams = {};

const RenderGraph: React.FC<GraphParams> = () => {

const {
  ref: {
    current: ref
  },
  state: {
    current: initState
  },
  bus: {
      current: bus
  },
} = useContext(graphContext);


  const GraphRef = useRef<HTMLDivElement>(null);
  const minimapRef = useRef(null);

  
  useEffect(() => {
      if (ref.graph) {
          ref.graph.destroy()
        } else {
            ref.graph = renderG6(GraphRef, minimapRef);
        }
    }, []);
    
  useEffect(() => {
    renderGraphItem(initState)
}, [initState.isEdit])


  useEffect(() => {
    const test = () => console.log(111)
    bus.addEventListener('show', test)
    return () => {
        bus.removeEventListener('show', test)
    }
  }, [])

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
