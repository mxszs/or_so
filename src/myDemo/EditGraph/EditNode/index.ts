import NodeDrawer from './NodeDrawer';
import NodeContextMenu from './NodeContextMenu';
import AddNode from './AddNode';

type setTitleTextType = {
  editNode?: string;
  editEdge?: string;
  addNode?: string;
};

export const setTitleText: setTitleTextType = {
  editNode: '修改节点信息',
  editEdge: '修改线条信息',
  addNode: '添加节点',
};

export { NodeDrawer, NodeContextMenu, AddNode };
