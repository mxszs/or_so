import React, { useEffect, useRef } from 'react';
import G6 from '@antv/g6';
import { data, strokes, colors } from './mock';
import './index.less';

type GraphParams = {};

const Graph: React.FC<GraphParams> = () => {
  const GraphRef = useRef<HTMLElement>(null);
  const minimapRef = useRef(null);

  const renderG6 = () => {
    const nodes = data.nodes;
    const clusterMap = new Map();
    let clusterId = 0;
    nodes.forEach(function(node: any) {
      // cluster
      if (node.cluster && clusterMap.get(node.cluster) === undefined) {
        clusterMap.set(node.cluster, clusterId);
        clusterId++;
      }
      const cid = clusterMap.get(node.cluster);
      if (!node.style) node.style = {};
      node.style.fill = colors[cid % colors.length];
      node.style.stroke = strokes[cid % strokes.length];
    });
    const minimap = new G6.Minimap({
      container: minimapRef.current,
      size: [150, 100],
    });
    const width = GraphRef.current.getBoundingClientRect().width || 500;
    const height = GraphRef.current.getBoundingClientRect().height || 500;
    const graph = new G6.Graph({
      container: GraphRef.current,
      width,
      height,
      modes: {
        default: [
          'zoom-canvas',
          'drag-canvas',
          'click-select',
          'activate-relations',
        ],
      },
      layout: {
        type: 'dagre',
        controlPoints: true,
        ranksep: 20,
        nodesep: 50,
      },
      defaultNode: {
        size: 20,
      },
      defaultEdge: {
        type: 'polyline',
        style: {
          radius: 20,
          offset: 45,
          endArrow: true,
          lineWidth: 2,
          stroke: '#C2C8D5',
        },
      },
      plugins: [minimap],
    });
    graph.data(data);
    graph.render();
  };

  useEffect(() => {
    renderG6();
  }, []);
  return (
    <>
      <div style={{ height: 500 }} ref={GraphRef}></div>
      <div ref={minimapRef}></div>
    </>
  );
};

export default Graph;
