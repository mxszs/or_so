import React, { useState } from 'react';
import GGEditor, { Flow, RegisterBehaviour } from 'gg-editor';
import styles from './index.less';
// import EditorMinimap from '../components/EditorMinimap';
import CustomNode from './shape';

import mock from './mock.json';
// import { WorkSpace } from './WorkSpace';

class FlowPage extends React.Component {
  constructor(props) {
    super(props);
  }

  handleAfterItemSelected = (e) => {
    const model = e.item.getModel();
    console.log(model);
  }

  render() {
    const data = JSON.parse(mock.statemachine_inst_json);
    return (
      <GGEditor  className={styles.editor}>
        <Flow
        ref={e => (this.editor = e)}
          style={{ height: 500 }}
          graph={{ mode: 'readOnly',
            modes: {
              readOnly: ['clickNodeSelected', 'panBlank', "clickCanvasSelected"],
            },
          }}
          data={data}
          onNodeClick={this.handleAfterItemSelected}
        />
        {/* <EditorMinimap /> */}
        {/* <RegisterBehaviour name="test" behaviour={(page) => console.log(behaviour)} dependences={['onNodeClick']} /> */}
        <CustomNode />
      </GGEditor>
    );
  }
}

export default FlowPage;
