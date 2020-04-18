import G6 from '@antv/g6';
import G from '@antv/g';

function renderLine(initState) {
  G6.registerEdge('editLine', {
    draw(cfg: any, group: any) {
      const startPoint = cfg.startPoint;
      const endPoint = cfg.endPoint;
      const shape = group.addShape('path', {
        attrs: {
          stroke: '#333',
          fill: '#666',
          lineWidth: 2,
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
        const { label } = cfg;
        // 用来计算text 的长度
        if (label) {
          const { width } = new G.Text({
            attrs: { x: 0, y: 0, text: label },
          }).getBBox();
          group.addShape('rect', {
            attrs: {
              x: (startPoint.x + endPoint.x) / 2 - width / 2,
              y: (startPoint.y + endPoint.y) / 2 - 10,
              width: width,
              height: 20,
              fill: '#eee',
              stroke: '#fff',
            },
          });
          group.addShape('text', {
            attrs: {
              x: (startPoint.x + endPoint.x) / 2,
              y: (startPoint.y + endPoint.y) / 2,
              text: label || '',
              textAlign: 'center',
              textBaseline: 'middle',
              fill: 'red',
              stroke: '#fff',
            },
          });
        }
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
    afterDraw(cfg: any, group: any) {
      // const startPoint = cfg.startPoint;
      // const endPoint = cfg.endPoint;
      // const { label } = cfg;
      // group.addShape('text', {
      //   attrs: {
      //     x: 0,
      //     y: 20,
      //     text: label || '',
      //     fill: 'red',
      //     stroke: '#fff'
      //   }
      // })
    },
  });
}

export { renderLine };
