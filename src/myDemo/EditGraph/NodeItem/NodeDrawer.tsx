import React, { useContext, useState, useEffect } from 'react';
import { Drawer } from 'antd';
import { graphContext } from '../Graph/graphContext';

const EditGraph = () => {
  const {
    ref: { current: ref },
  } = useContext(graphContext);
  const [visible, setVisible] = useState(false);
  const [racod, setRacod] = useState({});
  useEffect(() => {
    ref.graph.on('node:click', (ev: any) => {
      const { item } = ev;
      setVisible(true);
      setRacod(item.getModel());
    });
  }, []);
  return (
    <Drawer
      title="test"
      visible={visible}
      width={500}
      onClose={() => setVisible(false)}
    >
      {JSON.stringify(racod, null, 2)}
    </Drawer>
  );
};
export default EditGraph;
