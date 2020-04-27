import { ApplyPluginsType } from '/Users/orso/Desktop/learn/MyDoc/node_modules/_@umijs_runtime@3.0.18@@umijs/runtime/dist/index.js';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/_demos/index",
    "component": require('../../myDemo/EditGraph/index.tsx').default
  },
  {
    "path": "/_demos/index-1",
    "component": require('../../myDemo/Graph/index.tsx').default
  },
  {
    "path": "/_demos/test-event-bus",
    "component": require('../../../docs/components/TestEventBus.tsx').default
  },
  {
    "path": "/_demos/event-bus",
    "component": require('../../../docs/components/EventBus.tsx').default
  },
  {
    "path": "/_demos/radio-button",
    "component": require('../../myDemo/Form/RadioButton.tsx').default
  },
  {
    "path": "/_demos/index-2",
    "component": require('../../myDemo/EditTable/index.tsx').default
  },
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('/Users/orso/Desktop/learn/MyDoc/node_modules/_@umijs_preset-dumi@1.0.13@@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"en-US":{"*":[{"path":"/","title":"or_so","meta":{}}],"/components":[{"path":"/components/test","title":"事件总线","meta":{}},{"path":"/components/saga","title":"流程图查看","meta":{}},{"title":"单选按钮","path":"/components/radio","meta":{},"children":[{"path":"/components/radio","title":"表单","meta":{}}]},{"path":"/components/edit-table","title":"可编辑表单表格","meta":{}},{"path":"/components/edit-graph","title":"流程图编辑器","meta":{}}],"/doc":[{"path":"/doc","title":"标题内容","meta":{}},{"path":"/doc/description","title":"描述","meta":{}}],"/guide":[{"path":"/guide","title":"标题内容","meta":{}}]},"zh-CN":{"/zh-CN/guide":[{"path":"/zh-CN/guide","title":"标题内容","meta":{}}],"*":[{"path":"/zh-CN","title":"or_so","meta":{}}],"/zh-CN/components":[{"path":"/zh-CN/components/test","title":"事件总线","meta":{}},{"path":"/zh-CN/components/saga","title":"流程图查看","meta":{}},{"title":"单选按钮","path":"/zh-CN/components/radio","meta":{},"children":[{"path":"/zh-CN/components/radio","title":"表单","meta":{}}]},{"path":"/zh-CN/components/edit-table","title":"可编辑表单表格","meta":{}},{"path":"/zh-CN/components/edit-graph","title":"流程图编辑器","meta":{}}],"/zh-CN/doc":[{"path":"/zh-CN/doc","title":"标题内容","meta":{}},{"path":"/zh-CN/doc/description","title":"描述","meta":{}}]}},"locales":[{"name":"en-US","label":"English"},{"name":"zh-CN","label":"中文"}],"navs":{"en-US":[{"path":"/doc","title":"文档"},{"title":"指南","path":"/guide"},{"path":"/components","title":"组件"},{"title":"GitHub","path":"https://github.com/mxszs"}],"zh-CN":[{"path":"/zh-CN/doc","title":"文档"},{"title":"指南","path":"/zh-CN/guide"},{"path":"/zh-CN/components","title":"组件"},{"title":"GitHub","path":"https://github.com/mxszs"}]},"title":"or_so","logo":"https://avatars2.githubusercontent.com/u/33783716?s=60&v=4","mode":"site"},
      ...props,
    }),
    "routes": [
      {
        "path": "/",
        "component": require('../../../docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1586015384000,
          "title": "or_so",
          "hero": {
            "title": "or_so",
            "desc": null,
            "actions": [
              {
                "text": "开始",
                "link": "/doc"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png",
              "title": "One",
              "desc": "<div class=\"markdown\"><p>望</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png",
              "title": "Two",
              "desc": "<div class=\"markdown\"><p>闻</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "Three",
              "desc": "<div class=\"markdown\"><p>听</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2020</p></div>",
          "slugs": []
        },
        "title": "or_so"
      },
      {
        "path": "/components/edit-graph",
        "component": require('../../../docs/components/EditGraph.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/EditGraph.md",
          "updatedTime": 1586971773000,
          "title": "流程图编辑器",
          "saga": {
            "title": "流程图编辑器",
            "order": 2
          },
          "slugs": [
            {
              "depth": 3,
              "value": "编辑器",
              "heading": "编辑器"
            }
          ],
          "nav": {
            "path": "/components",
            "title": "组件"
          }
        },
        "title": "流程图编辑器"
      },
      {
        "path": "/components/edit-table",
        "component": require('../../../docs/components/EditTable.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/EditTable.md",
          "updatedTime": null,
          "title": "可编辑表单表格",
          "slugs": [
            {
              "depth": 3,
              "value": "表单表格",
              "heading": "表单表格"
            }
          ],
          "nav": {
            "path": "/components",
            "title": "组件"
          }
        },
        "title": "可编辑表单表格"
      },
      {
        "path": "/components/saga",
        "component": require('../../../docs/components/Saga.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/Saga.md",
          "updatedTime": 1586788418000,
          "title": "流程图查看",
          "saga": {
            "title": "流程图查看",
            "order": 1
          },
          "slugs": [
            {
              "depth": 3,
              "value": "流程图",
              "heading": "流程图"
            }
          ],
          "nav": {
            "path": "/components",
            "title": "组件"
          }
        },
        "title": "流程图查看"
      },
      {
        "path": "/components/test",
        "component": require('../../../docs/components/test.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/test.md",
          "updatedTime": 1586788418000,
          "title": "事件总线",
          "nav": {
            "title": "组件",
            "path": "/components"
          },
          "slugs": [
            {
              "depth": 3,
              "value": "触发",
              "heading": "触发"
            },
            {
              "depth": 3,
              "value": "展示 移除",
              "heading": "展示-移除"
            }
          ]
        },
        "title": "事件总线"
      },
      {
        "path": "/components/radio",
        "component": require('../../../docs/components/Radio/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/Radio/index.md",
          "updatedTime": 1586971773000,
          "title": "表单",
          "group": {
            "title": "单选按钮",
            "path": "/components/radio"
          },
          "slugs": [
            {
              "depth": 3,
              "value": "单选框表单",
              "heading": "单选框表单"
            }
          ],
          "nav": {
            "path": "/components",
            "title": "组件"
          }
        },
        "title": "表单"
      },
      {
        "path": "/doc/description",
        "component": require('../../../docs/doc/description.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/doc/description.md",
          "updatedTime": 1585927080000,
          "title": "描述",
          "slugs": [
            {
              "depth": 3,
              "value": "这是第一篇文档",
              "heading": "这是第一篇文档"
            }
          ],
          "nav": {
            "path": "/doc",
            "title": "文档"
          }
        },
        "title": "描述"
      },
      {
        "path": "/doc",
        "component": require('../../../docs/doc/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/doc/index.md",
          "updatedTime": 1585927080000,
          "title": "标题内容",
          "nav": {
            "title": "文档",
            "path": "/doc"
          },
          "slugs": []
        },
        "title": "标题内容"
      },
      {
        "path": "/guide",
        "component": require('../../../docs/guide/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/index.md",
          "updatedTime": 1586015384000,
          "title": "标题内容",
          "nav": {
            "title": "指南",
            "path": "/guide"
          },
          "slugs": [
            {
              "depth": 3,
              "value": "saga",
              "heading": "saga"
            }
          ]
        },
        "title": "标题内容"
      },
      {
        "path": "/zh-CN/guide",
        "component": require('../../../docs/guide/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/index.zh-CN.md",
          "updatedTime": 1585927080000,
          "title": "标题内容",
          "nav": {
            "title": "指南",
            "path": "/zh-CN/guide"
          },
          "slugs": [],
          "locale": "zh-CN"
        },
        "title": "标题内容"
      },
      {
        "path": "/zh-CN",
        "component": require('../../../docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1586015384000,
          "title": "or_so",
          "hero": {
            "title": "or_so",
            "desc": null,
            "actions": [
              {
                "text": "开始",
                "link": "/doc"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png",
              "title": "One",
              "desc": "<div class=\"markdown\"><p>望</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png",
              "title": "Two",
              "desc": "<div class=\"markdown\"><p>闻</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "Three",
              "desc": "<div class=\"markdown\"><p>听</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2020</p></div>",
          "slugs": [],
          "locale": "zh-CN"
        },
        "title": "or_so"
      },
      {
        "path": "/zh-CN/components/edit-graph",
        "component": require('../../../docs/components/EditGraph.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/EditGraph.md",
          "updatedTime": 1586971773000,
          "title": "流程图编辑器",
          "saga": {
            "title": "流程图编辑器",
            "order": 2
          },
          "slugs": [
            {
              "depth": 3,
              "value": "编辑器",
              "heading": "编辑器"
            }
          ],
          "nav": {
            "path": "/zh-CN/components",
            "title": "组件"
          },
          "locale": "zh-CN"
        },
        "title": "流程图编辑器"
      },
      {
        "path": "/zh-CN/components/edit-table",
        "component": require('../../../docs/components/EditTable.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/EditTable.md",
          "updatedTime": null,
          "title": "可编辑表单表格",
          "slugs": [
            {
              "depth": 3,
              "value": "表单表格",
              "heading": "表单表格"
            }
          ],
          "nav": {
            "path": "/zh-CN/components",
            "title": "组件"
          },
          "locale": "zh-CN"
        },
        "title": "可编辑表单表格"
      },
      {
        "path": "/zh-CN/components/saga",
        "component": require('../../../docs/components/Saga.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/Saga.md",
          "updatedTime": 1586788418000,
          "title": "流程图查看",
          "saga": {
            "title": "流程图查看",
            "order": 1
          },
          "slugs": [
            {
              "depth": 3,
              "value": "流程图",
              "heading": "流程图"
            }
          ],
          "nav": {
            "path": "/zh-CN/components",
            "title": "组件"
          },
          "locale": "zh-CN"
        },
        "title": "流程图查看"
      },
      {
        "path": "/zh-CN/components/test",
        "component": require('../../../docs/components/test.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/test.md",
          "updatedTime": 1586788418000,
          "title": "事件总线",
          "nav": {
            "title": "组件",
            "path": "/zh-CN/components"
          },
          "slugs": [
            {
              "depth": 3,
              "value": "触发",
              "heading": "触发"
            },
            {
              "depth": 3,
              "value": "展示 移除",
              "heading": "展示-移除"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "事件总线"
      },
      {
        "path": "/zh-CN/components/radio",
        "component": require('../../../docs/components/Radio/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/Radio/index.md",
          "updatedTime": 1586971773000,
          "title": "表单",
          "group": {
            "title": "单选按钮",
            "path": "/zh-CN/components/radio"
          },
          "slugs": [
            {
              "depth": 3,
              "value": "单选框表单",
              "heading": "单选框表单"
            }
          ],
          "nav": {
            "path": "/zh-CN/components",
            "title": "组件"
          },
          "locale": "zh-CN"
        },
        "title": "表单"
      },
      {
        "path": "/zh-CN/doc/description",
        "component": require('../../../docs/doc/description.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/doc/description.md",
          "updatedTime": 1585927080000,
          "title": "描述",
          "slugs": [
            {
              "depth": 3,
              "value": "这是第一篇文档",
              "heading": "这是第一篇文档"
            }
          ],
          "nav": {
            "path": "/zh-CN/doc",
            "title": "文档"
          },
          "locale": "zh-CN"
        },
        "title": "描述"
      },
      {
        "path": "/zh-CN/doc",
        "component": require('../../../docs/doc/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/doc/index.md",
          "updatedTime": 1585927080000,
          "title": "标题内容",
          "nav": {
            "title": "文档",
            "path": "/zh-CN/doc"
          },
          "slugs": [],
          "locale": "zh-CN"
        },
        "title": "标题内容"
      },
      {
        "path": "/components",
        "meta": {},
        "exact": true,
        "redirect": "/components/test"
      },
      {
        "path": "/zh-CN/components",
        "meta": {},
        "exact": true,
        "redirect": "/zh-CN/components/test"
      }
    ],
    "title": "or_so"
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
