import { Graph } from '@antv/x6';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Space } from 'antd';
import { Graph as GraphType } from '@antv/x6/lib/graph';
import { DagreLayout } from '@antv/layout';
import addonStencil from './utils/stencil';
import createNode from './utils/createNodes';
import createEdge from './utils/createEdges';
import bindKey from './utils/bindKey';
import nodeEvent from './utils/nodeEvent';
import OperationArea from './components/OperationArea';
import EventBus from 'or_so/src/myDemo/util/eventBus';

import './index.less';
import Shape from '@antv/g6/lib/shape';

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
  const [config, setConfig] = useState<{
    visible: boolean;
    data: any;
  }>({
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
      scroller: {
        enabled: true,
      },
      minimap: {
        enabled: true,
        container: document.getElementById('minimap')!,
        scalable: false,
        graphOptions: {
          async: true,
          connecting: {
            router: 'manhattan',
            connector: {
              name: 'rounded',
              args: {
                radius: 8,
              },
            },
          },
        },
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
        createEdge,
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
    const groups = createNode(graph);
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

  const layout = () => {
    const dagreLayout = new DagreLayout({
      type: 'dagre',
      rankdir: 'TB',
      ranksep: 40,
      nodesep: 50,
      controlPoints: true,
    });
    const data = {
      nodes: GraphRef.current.graph
        .toJSON()
        .cells.filter(item => !Reflect.has(item, 'source')),
      edges: GraphRef.current.graph
        .toJSON()
        .cells.filter(item => Reflect.has(item, 'source')),
    };
    const model = dagreLayout.layout(data);
    GraphRef.current.graph.fromJSON(model);
  };

  return (
    <div>
      <Space style={{ padding: '8px 0' }}>
        <Button onClick={layout}>布局</Button>
      </Space>
      <div style={{ height: 500 }} id="container">
        <div id="stencil" />
        <div id="graph-container" />
        <div id="minimap" />
        <OperationArea config={config} graph={GraphRef.current.graph} />
      </div>
    </div>
  );
};

export default X6;
