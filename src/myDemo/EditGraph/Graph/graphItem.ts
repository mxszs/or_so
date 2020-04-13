import G6 from '@antv/g6';

function renderLine() {
  G6.registerEdge(
    'editLine',
    {
      draw(cfg:any, group:any) {
        const startPoint = cfg.startPoint;
        const endPoint = cfg.endPoint;
        const shape = group.addShape('path', {
          attrs: {
            stroke: '#333',
            endArrow: {
              path: 'M 0,0 L 6,-4 L 6,4 Z',
              fill: '#333',
              stroke: '#666',
              opacity: 0.8,
            },
            path: [
              ['M', startPoint.x, startPoint.y],
              ['L', endPoint.x, endPoint.y],
            ],
          },
          name: 'path-shape',
        });
        group.addShape('circle', {
          attrs: {
            x: (startPoint.x + endPoint.x) / 2,
            y: (startPoint.y + endPoint.y) / 2,
            r: 5,
            stroke: 'red',
          }
        })
        return shape;
      },
    },
  );
}

export { renderLine };
