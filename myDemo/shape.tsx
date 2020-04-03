import React from 'react';
import { RegisterNode } from 'gg-editor';

class CustomNode extends React.Component {
  render() {
    const config = {
      draw(item) {
        const keyShape = this.drawKeyShape(item);

        // 绘制图标
        const group = item.getGraphicGroup();
        const model = item.getModel();

        group.addShape('image', {
          attrs: {
            x: -15,
            y: -25,
            width: 30,
            height: 30,
            // fill: 'red',
            img:
              'https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@master/icons/html.svg',
          },
        });

        // 绘制标签
        this.drawLabel(item);
        // 节点样式
        return keyShape;
      },
      getStyle(item) {
        return {
          fill: 'red',
          //fillOpacity: 0,
          // stroke: '#44C0FF',
          radius: 4,
          lineWidth: 2,
        };
      },
      // 激活样式
      getActivedStyle(item) {
        return {
          stroke: '#44C0FF',
          lineWidth: 2,
        };
      },
      // 选中样式
      getSelectedStyle(item) {
        return {
          stroke: '#1AA7EE',
          lineWidth: 2,
        };
      },
    };

    return (
      <RegisterNode name="custom-node" config={config} extend={'flow-rect'} />
    );
  }
}

export default CustomNode;
