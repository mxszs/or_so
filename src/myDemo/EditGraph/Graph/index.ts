import G6 from '@antv/g6';

export const renderG6 = (
  minimapRef: React.RefObject<HTMLDivElement>,
  GraphRef: any,
) => {
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
    maxZoom: 1,
    modes: {
      default: ['drag-canvas', 'activate-relations'],
    },
    layout: {
      type: 'dagre',
      controlPoints: true,
      ranksep: 40,
      nodesep: 50,
    },
    defaultNode: {
      size: 20,
    },
    defaultEdge: {
      type: 'editLine',
      style: {
        endArrow: {
          path: 'M 0,0 L 6,-4 L 6,4 Z',
        },
        fill: '#666',
        stroke: '#333',
        lineWidth: 2,
      },
    },
    plugins: [minimap],
  });
  graph.data({
    nodes: [
      { id: '1', isDelete: 'not', nodeType: 'begin', label: '开始' },
      { id: '2', isDelete: 'not', nodeType: 'end', label: '结束' },
    ],
    edges: [
      {
        source: '1',
        target: '2',
        label: '222',
        type: 'editLine',
      },
    ],
  });

  graph.render();
  graph.fitView(0);
  return graph;
};
