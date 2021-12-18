import { Graph } from '@antv/x6/lib/graph';
import EventBus from 'or_so/src/myDemo/util/eventBus';
// 控制连接桩显示/隐藏
const showPorts = (ports: NodeListOf<SVGElement>, show: boolean) => {
  for (let i = 0, len = ports.length; i < len; i = i + 1) {
    ports[i].style.visibility = show ? 'visible' : 'hidden';
  }
};

const nodeEvents = (graph: Graph) => {
  graph.on('node:mouseenter', () => {
    const container = document.getElementById('graph-container')!;
    const ports = container.querySelectorAll('.x6-port-body') as NodeListOf<
      SVGElement
    >;
    showPorts(ports, true);
  });

  graph.on('node:click', e => {
    console.log(e, 'e');
    EventBus.dispatchEvent({
      type: 'config',
      data: { visible: true, data: e },
    });
  });

  graph.on('edge:mouseenter', () => {
    const container = document.getElementById('graph-container')!;
    const ports = container.querySelectorAll(
      '.button-visibility',
    ) as NodeListOf<SVGElement>;
    showPorts(ports, true);
  });

  graph.on('edge:mouseleave', () => {
    const container = document.getElementById('graph-container')!;
    const ports = container.querySelectorAll(
      '.button-visibility',
    ) as NodeListOf<SVGElement>;
    showPorts(ports, false);
  });

  // graph.on('edge:mouseenter', ({ edge }) => {
  //   edge.addTools([
  //     'target-arrowhead',
  //     {
  //       name: 'button-remove',
  //       args: {
  //         distance: -30,
  //       },
  //     },
  //   ], {
  //     reset: true
  //   })
  // })

  // graph.on('edge:mouseleave', ({ edge }) => {
  //   edge.removeTools()
  // })

  graph.on('node:mouseenter', ({ node }) => {
    node.addTools({
      name: 'button-remove',
      args: {
        x: 0,
        y: 0,
        offset: { x: 10, y: 10 },
      },
    });
  });

  graph.on('node:mouseleave', ({ node }) => {
    node.removeTools();
  });

  graph.on('node:mouseleave', () => {
    const container = document.getElementById('graph-container')!;
    const ports = container.querySelectorAll('.x6-port-body') as NodeListOf<
      SVGElement
    >;
    showPorts(ports, false);
  });
};

export default nodeEvents;
