import { Shape, Graph } from '@antv/x6';
import EventBus from 'or_so/src/myDemo/util/eventBus';

const commonTools = {
  name: 'button',
  args: {
    markup: [
      {
        className: 'button-visibility',
        tagName: 'circle',
        selector: 'button',
        attrs: {
          r: 7,
          stroke: '#fe854f',
          strokeWidth: 2,
          fill: 'white',
          cursor: 'pointer',
        },
        style: {
          visibility: 'hidden',
        },
      },
      {
        className: 'button-visibility',
        tagName: 'text',
        textContent: '+',
        selector: 'icon',
        attrs: {
          fill: '#fe854f',
          fontSize: 10,
          textAnchor: 'middle',
          pointerEvents: 'none',
          y: '0.3em',
        },
        style: {
          visibility: 'hidden',
        },
      },
    ],
    distance: '50%',
    offset: { x: 0, y: 0 },
    onClick(e: any) {
      EventBus.dispatchEvent({
        type: 'config',
        data: { visible: true, data: e },
      });
    },
  },
};

const buttonRemove = {
  name: 'button-remove',
  args: {
    markup: [
      // 这里有问题，覆盖掉线段的白边
      {
        className: 'button-visibility',
        attrs: {
          cursor: 'pointer',
        },
        style: {
          visibility: 'hidden',
        },
      },
      {
        className: 'button-visibility',
        attrs: {
          cursor: 'pointer',
        },
        style: {
          visibility: 'hidden',
        },
      },
    ],
    distance: '80%',
    offset: { x: 0, y: 0 },
    onClick(e: any) {
      e.view.graph.removeEdge(e.view.cell);
    },
  },
};

const creatEdge = () => {
  return new Shape.Edge({
    tools: [commonTools, buttonRemove],
  });
};

const defaultEdge = () => {
  Graph.registerEdge(
    'custom-edge', // 边名称
    {
      // 基类
      inherit: 'edge',
      tools: [commonTools, buttonRemove],
    },
  );
};
export { defaultEdge };
export default creatEdge;
