import React, { useContext, useState, useEffect } from 'react';
import { Menu } from 'antd';
import { INode } from '@antv/g6/lib/interface/item';
import { graphContext } from '../Graph/graphContext';

const EditGraph = () => {
  const {
    ref: { current: ref },
    state: { current: state },
  } = useContext(graphContext);

  const [nodeContextMenu, setShowNodeContextMenu] = useState(false);
  const [NodeContextMenuPoint, setNodeContextMenu] = useState({});
  const [nodeItem, setNodeItem] = useState<INode>({} as INode);

  useEffect(() => {
    ref.graph.on('click', () => {
      setShowNodeContextMenu(false);
    });
    ref.graph.on('node:contextmenu', ev => {
      ev.originalEvent.preventDefault();
      const { item } = ev;
      const model = item.getModel();
      if (model.isDelete || !state.isEdit) {
        return;
      }
      const pointBBox = item.getBBox();
      const { maxX, maxY } = pointBBox;
      console.log(pointBBox, 'pointBBox');
      const point = ref.graph.getCanvasByPoint(maxX, maxY);
      setNodeContextMenu(point);
      setShowNodeContextMenu(true);
      setNodeItem(item);
    });
    ref.graph.on('node:click', ev => {
      ev.originalEvent.preventDefault();
      const { item, target } = ev;
      const { cfg = {} } = target;
      if (cfg.name === 'deleteNode') {
        deleteNode(item);
      }
    });
  }, []);

  const deleteNode = (nodeItem: INode) => {
    ref.graph.setAutoPaint(false);
    const edgeSource = nodeItem.getInEdges()[0].getModel();
    const edgeTarget = nodeItem.getOutEdges()[0].getModel().target;
    ref.graph.addItem('edge', {
      shape: 'editLine',
      label: edgeSource.label,
      source: edgeSource.source,
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

  const onSelect = ({ _, key }: any) => {
    switch (key) {
      case 'delete':
        deleteNode(nodeItem);
      case 'copy':
        null;
      default:
        null;
    }
  };
  return (
    <>
      {nodeContextMenu && (
        <Menu
          style={{
            width: 100,
            position: 'absolute',
            boxShadow:
              '0 1px 2px -2px rgba(0,0,0,.16), 0 3px 6px 0 rgba(0,0,0,.12), 0 5px 12px 4px rgba(0,0,0,.09)',
            left: NodeContextMenuPoint.x,
            top: NodeContextMenuPoint.y,
          }}
          mode="vertical"
          onSelect={onSelect}
        >
          <Menu.Item key="delete">删除</Menu.Item>
          {/* <Menu.Item>复制</Menu.Item> */}
        </Menu>
      )}
    </>
  );
};
export default EditGraph;
