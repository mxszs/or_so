import G6 from '@antv/g6';
import { ModelConfig, IPoint } from '@antv/g6/lib/types';
import GGroup from '@antv/g-canvas/lib/group';
import G from '@antv/g';
import { NodeType } from '@/@types/NodeType';

const BASE_NODEWIDTH = 180;
const BASE_NODEHEIGHT = 50;

function renderLine(initState: NodeType.stateType) {
  G6.registerEdge('editLine', {
    draw(cfg: ModelConfig, group: GGroup) {
      const startPoint: IPoint = cfg.startPoint || { x: 0, y: 0 };
      const endPoint: IPoint = cfg.endPoint || { x: 0, y: 0 };
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
            ['M', startPoint?.x, startPoint?.y],
            ['L', endPoint?.x, endPoint?.y],
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
    afterDraw(cfg: any, group: any) {},
  });
}

function renderbaseNode(initState: NodeType.stateType) {
  G6.registerNode('baseNode', {
    draw(cfg: ModelConfig, group: GGroup) {
      const { label } = cfg;
      const baseNode = group.addShape('rect', {
        attrs: {
          x: -(BASE_NODEWIDTH / 2),
          y: 0,
          width: BASE_NODEWIDTH,
          height: BASE_NODEHEIGHT,
          fill: '#fff',
          stroke: 'blue',
          radius: 4,
          anchorPoints: [
            [0, 1],
            [0.5, 1],
          ],
        },
      });
      group.addShape('text', {
        attrs: {
          x: 0,
          y: BASE_NODEHEIGHT / 2,
          text: label,
          fill: '#000',
          textAlign: 'center',
          textBaseline: 'middle',
        },
      });
      // 绘制删除图标
      // if (!initState.isEdit) {
      //   return baseNode;
      // }
      // group.addShape('text', {
      //   attrs: {
      //     x: BASE_NODEWIDTH / 2 - 16,
      //     y: 16,
      //     fontFamily: 'iconfont',
      //     text: '\ue619',
      //     fill: '#000',
      //     fontSize: 16,
      //     cursor: 'pointer',
      //   },
      //   name: 'deleteNode'
      // })
      return baseNode;
    },
    getAnchorPoints() {
      return [
        [0.5, 0],
        [0.5, 1],
      ];
    },
  });
}

export { renderLine, renderbaseNode };
