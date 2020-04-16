import React, { useContext, useState, useEffect } from 'react';
import { Menu } from 'antd';
import { INode } from '@antv/g6/lib/interface/item';
import { graphContext } from '../Graph/graphContext';

const EditGraph = () => {
  const {
    ref: { current: ref },
  } = useContext(graphContext);

  const [nodeContextMenu, setShowNodeContextMenu] = useState(false);
  const [NodeContextMenuPoint, setNodeContextMenu] = useState({});
  const [nodeItem, setNodeItem] = useState<INode>({} as INode);

  useEffect(() => {
    ref.graph.on('node:mouseleave', () => {
      // setShowNodeContextMenu(false)
    });
    ref.graph.on('node:contextmenu', ev => {
      ev.originalEvent.preventDefault();
      const { item } = ev;
      const model = item.getModel();
      if (model.isDelete) {
        return;
      }
      const { x, y } = model;
      const point = ref.graph.getCanvasByPoint(x, y);
      setNodeContextMenu(point);
      setShowNodeContextMenu(true);
      setNodeItem(item);
    });
  }, []);

  const deleteNode = () => {
    ref.graph.setAutoPaint(false);
    const edgeSource = nodeItem.getInEdges()[0].getModel().source;
    const edgeTarget = nodeItem.getOutEdges()[0].getModel().target;
    ref.graph.addItem('edge', {
      shape: 'editLine',
      source: edgeSource,
      target: edgeTarget,
    });
    nodeItem.getEdges().forEach(item => {
      ref.graph.removeItem(item);
    });
    ref.graph.removeItem(nodeItem);
    ref.graph.setAutoPaint(true);
    setShowNodeContextMenu(false);
    ref.graph.changeData(ref.graph.save());
  };

  return (
    <>
      {nodeContextMenu && (
        <Menu
          style={{
            width: 100,
            background: '#eee',
            position: 'absolute',
            left: NodeContextMenuPoint.x,
            top: NodeContextMenuPoint.y,
          }}
          mode="vertical"
          onClick={deleteNode}
        >
          <Menu.Item>删除</Menu.Item>
        </Menu>
      )}
    </>
  );
};
export default EditGraph;
