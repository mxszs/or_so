import { Addon } from '@antv/x6';
import { Graph } from '@antv/x6/lib/graph';

// #region 初始化 stencil
const stencil = (graph: Graph) => {
  return new Addon.Stencil({
    title: '流程图',
    target: graph,
    stencilGraphWidth: 180,
    stencilGraphHeight: 180,
    collapsable: true,
    groups: [
      {
        title: '基础流程图',
        name: 'group1',
      },
      {
        title: '系统设计图',
        name: 'group2',
      },
      {
        title: '测试设计图',
        name: 'group3',
      },
    ],
    layoutOptions: {
      columns: 2,
      columnWidth: 75,
      rowHeight: 55,
    },
  });
};

export default stencil;
