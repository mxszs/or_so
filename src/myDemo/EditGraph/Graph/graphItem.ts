import G6 from '@antv/g6';

function renderLine(initState) {
  G6.registerEdge('editLine', {
    draw(cfg: any, group: any) {
      const startPoint = cfg.startPoint;
      const endPoint = cfg.endPoint;
      const shape = group.addShape('path', {
        attrs: {
          stroke: '#333',
          fill: '#666',
          endArrow: {
            path: 'M 0,0 L 6,-4 L 6,4 Z',
            // opacity: 0.8,
            fill: '#666',
          },
          path: [
            ['M', startPoint.x, startPoint.y],
            ['L', endPoint.x, endPoint.y],
          ],
        },
        name: 'path-shape',
      });

      if (!initState.isEdit) {
        return shape;
      }

      group.addShape('circle', {
        attrs: {
          x: (startPoint.x + endPoint.x) / 2,
          y: (startPoint.y + endPoint.y) / 2,
          r: 10,
          stroke: '#52C41A',
          fill: '#fff',
          lineDash: [4],
          cursor: 'pointer',
        },
        className: 'addNode',
      });
      group.addShape('text', {
        attrs: {
          x: (startPoint.x + endPoint.x) / 2,
          y: (startPoint.y + endPoint.y) / 2,
          textAlign: 'center',
          textBaseline: 'middle',
          fill: '#52C41A',
          fontSize: 14,
          text: '+',
          cursor: 'pointer',
        },
        className: 'addNode',
      });
      return shape;
    },
  });
}

export { renderLine };
