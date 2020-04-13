import G6 from '@antv/g6';
import { renderLine } from './graphItem';

renderLine();
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
      ranksep: 20,
      nodesep: 50,
    },
    defaultNode: {
      size: 20,
    },
    defaultEdge: {
      type: 'editLine',
      style: {
        endArrow: true,
        lineWidth: 2,
        stroke: '#C2C8D5',
      },
    },
    plugins: [minimap],
  });
  graph.data({
    nodes: [{ id: '1' }, { id: '2' }],
    edges: [
      {
        source: '1',
        target: '2',
        type: 'editLine',
      },
    ],
  });

  graph.render();
  graph.fitView(0);
  return graph;
};
