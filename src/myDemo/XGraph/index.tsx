import { Graph, Shape } from '@antv/x6';
import React, { useEffect, useRef, useState } from 'react';
import addonStencil from './utils/stencil';
import creatNode from './utils/creatNodes';
import bindKey from './utils/bindKey';
import nodeEvent from './utils/nodeEvent';
import OperationArea from './components/OperationArea';
import EventBus from 'or_so/src/myDemo/util/eventBus';
import { Graph as GraphType } from '@antv/x6/lib/graph';

import './index.less';

type DoSetConfig = {
  data: {
    visible: boolean;
    data: {};
  };
};

const X6: React.FC = () => {
  const GraphRef = useRef<{ graph: GraphType }>({
    graph: {} as any,
  });
  const [config, setConfig] = useState({
    visible: false,
    data: {},
  });

  const doSetConfig = (params: DoSetConfig) => setConfig(params.data);

  useEffect(() => {
    EventBus.addEventListener('config', doSetConfig);
  }, []);

  const renderGraph = () => {
    // #region 初始化画布
    const graph = new Graph({
      container: document.getElementById('graph-container')!,
      grid: true,
      mousewheel: {
        enabled: true,
        zoomAtMousePosition: true,
        modifiers: 'ctrl',
        minScale: 0.5,
        maxScale: 3,
      },
      connecting: {
        router: 'manhattan',
        connector: {
          name: 'rounded',
          args: {
            radius: 8,
          },
        },
        anchor: 'center',
        connectionPoint: 'anchor',
        allowBlank: false,
        snap: {
          radius: 20,
        },
        createEdge() {
          return new Shape.Edge({
            attrs: {
              line: {
                stroke: '#A2B1C3',
                strokeWidth: 2,
                targetMarker: {
                  name: 'block',
                  width: 12,
                  height: 8,
                },
              },
            },
            zIndex: 0,
          });
        },
        validateConnection({ targetMagnet }) {
          return !!targetMagnet;
        },
      },
      highlighting: {
        magnetAdsorbed: {
          name: 'stroke',
          args: {
            attrs: {
              fill: '#5F95FF',
              stroke: '#5F95FF',
            },
          },
        },
      },
      resizing: true,
      rotating: true,
      selecting: {
        enabled: true,
        rubberband: true,
        showNodeSelectionBox: true,
      },
      snapline: true,
      keyboard: true,
      clipboard: true,
    });
    // #endregion
    const stencil = addonStencil(graph);
    document.getElementById('stencil')!.appendChild(stencil.container);
    // #endregion
    // 快捷键
    nodeEvent(graph);
    // 快捷键
    bindKey(graph);
    const groups = creatNode(graph);
    Object.entries(groups).forEach(item => {
      stencil.load(item[1], item[0]);
    });
    if (GraphRef.current) {
      (GraphRef.current as any).graph = graph;
    }
  };
  useEffect(() => {
    renderGraph();
  }, []);
  return (
    <div style={{ height: 500 }} id="container">
      <div id="stencil" />
      <div id="graph-container" />
      <OperationArea config={config} graph={GraphRef.current.graph} />
    </div>
  );
};

export default X6;
