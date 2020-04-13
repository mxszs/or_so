import G6 from '@antv/g6';

function renderLine(type = 'polyline') {
  console.log(1111);
  G6.registerEdge(
    'editLine',
    {
      afterDraw(cfg, group) {
        const startPoint = cfg.startPoint;
        const endPoint = cfg.endPoint;

        console.log(cfg, startPoint, 'bbox');
        const appLine = group?.addShape('circle', {
          attrs: {
            x: 30,
            y: 40,
            r: 5,
            stroke: 'red',
          },
        });
        return appLine;
      },
    },
    'polyline',
  );
}

export { renderLine };
