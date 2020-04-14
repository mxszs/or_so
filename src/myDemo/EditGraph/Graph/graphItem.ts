import G6 from '@antv/g6';

function renderLine(initState) {
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
        console.log(initState, 'initStatesaddas')

        if (initState.isEdit) {
          return shape;
        }

        group.addShape('circle', {
          attrs: {
            x: (startPoint.x + endPoint.x) / 2,
            y: (startPoint.y + endPoint.y) / 2,
            r: 10,
            stroke: 'red',
            fill: '#fff',
            lineDash: [4],
            cursor: 'pointer'
          }
        })
        group.addShape('text', {
          attrs: {
            x: (startPoint.x + endPoint.x) / 2,
            y: (startPoint.y + endPoint.y) / 2,
            textAlign: 'center',
            textBaseline: 'middle',
            fill: 'red',
            fontSize: 14,
            text: '+',
            cursor: 'pointer'
          }
        })
        return shape;
      },
    },
  );
}

export { renderLine };
