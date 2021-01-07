// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/orso/Desktop/learn/MyDoc/node_modules/_@umijs_runtime@3.3.3@@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('/Users/orso/Desktop/learn/MyDoc/node_modules/_@umijs_preset-dumi@1.1.0@@umijs/preset-dumi/lib/theme/layout').default],
    "component": (props) => {
      const React = require('react');
      const renderArgs = require('../../../node_modules/_@umijs_preset-dumi@1.1.0@@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs').default(props);

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            require('dumi-theme-default/src/builtins/Previewer.tsx').default,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${uuid} not found :(`;
      }
    }
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('/Users/orso/Desktop/learn/MyDoc/node_modules/_@umijs_preset-dumi@1.1.0@@umijs/preset-dumi/lib/theme/layout').default, require('/Users/orso/Desktop/learn/MyDoc/node_modules/_@umijs_preset-dumi@1.1.0@@umijs/preset-dumi/node_modules/dumi-theme-default/src/layout.tsx').default],
    "routes": [
      {
        "path": "/",
        "component": require('/Users/orso/Desktop/learn/MyDoc/docs/index.md').default,
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
        "component": require('/Users/orso/Desktop/learn/MyDoc/docs/components/EditGraph.md').default,
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
        "component": require('/Users/orso/Desktop/learn/MyDoc/docs/components/EditTable.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/EditTable.md",
          "updatedTime": 1605449005000,
          "title": "复杂表单",
          "slugs": [
            {
              "depth": 3,
              "value": "表单组件",
              "heading": "表单组件"
            }
          ],
          "nav": {
            "path": "/components",
            "title": "组件"
          }
        },
        "title": "复杂表单"
      },
      {
        "path": "/components/import-file",
        "component": require('/Users/orso/Desktop/learn/MyDoc/docs/components/ImportFile.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/ImportFile.md",
          "updatedTime": 1590420619000,
          "title": "导入 && 导出",
          "slugs": [
            {
              "depth": 3,
              "value": "导入 && 导出",
              "heading": "导入--导出"
            }
          ],
          "nav": {
            "path": "/components",
            "title": "组件"
          }
        },
        "title": "导入 && 导出"
      },
      {
        "path": "/components/saga",
        "component": require('/Users/orso/Desktop/learn/MyDoc/docs/components/Saga.md').default,
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
        "component": require('/Users/orso/Desktop/learn/MyDoc/docs/components/test.md').default,
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
        "component": require('/Users/orso/Desktop/learn/MyDoc/docs/components/Radio/index.md').default,
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
        "component": require('/Users/orso/Desktop/learn/MyDoc/docs/doc/description.md').default,
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
        "component": require('/Users/orso/Desktop/learn/MyDoc/docs/doc/index.md').default,
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
        "path": "/doc/share",
        "component": require('/Users/orso/Desktop/learn/MyDoc/docs/doc/share.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/doc/share.md",
          "updatedTime": 1609673980000,
          "title": "开发小技巧",
          "nav": {
            "title": "文档",
            "order": 1,
            "path": "/doc"
          },
          "slugs": []
        },
        "title": "开发小技巧"
      },
      {
        "path": "/guide",
        "component": require('/Users/orso/Desktop/learn/MyDoc/docs/guide/index.md').default,
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
        "component": require('/Users/orso/Desktop/learn/MyDoc/docs/guide/index.zh-CN.md').default,
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
        "component": require('/Users/orso/Desktop/learn/MyDoc/docs/index.md').default,
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
        "component": require('/Users/orso/Desktop/learn/MyDoc/docs/components/EditGraph.md').default,
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
        "component": require('/Users/orso/Desktop/learn/MyDoc/docs/components/EditTable.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/EditTable.md",
          "updatedTime": 1605449005000,
          "title": "复杂表单",
          "slugs": [
            {
              "depth": 3,
              "value": "表单组件",
              "heading": "表单组件"
            }
          ],
          "nav": {
            "path": "/zh-CN/components",
            "title": "组件"
          },
          "locale": "zh-CN"
        },
        "title": "复杂表单"
      },
      {
        "path": "/zh-CN/components/import-file",
        "component": require('/Users/orso/Desktop/learn/MyDoc/docs/components/ImportFile.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/ImportFile.md",
          "updatedTime": 1590420619000,
          "title": "导入 && 导出",
          "slugs": [
            {
              "depth": 3,
              "value": "导入 && 导出",
              "heading": "导入--导出"
            }
          ],
          "nav": {
            "path": "/zh-CN/components",
            "title": "组件"
          },
          "locale": "zh-CN"
        },
        "title": "导入 && 导出"
      },
      {
        "path": "/zh-CN/components/saga",
        "component": require('/Users/orso/Desktop/learn/MyDoc/docs/components/Saga.md').default,
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
        "component": require('/Users/orso/Desktop/learn/MyDoc/docs/components/test.md').default,
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
        "component": require('/Users/orso/Desktop/learn/MyDoc/docs/components/Radio/index.md').default,
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
        "component": require('/Users/orso/Desktop/learn/MyDoc/docs/doc/description.md').default,
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
        "component": require('/Users/orso/Desktop/learn/MyDoc/docs/doc/index.md').default,
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
        "path": "/zh-CN/doc/share",
        "component": require('/Users/orso/Desktop/learn/MyDoc/docs/doc/share.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/doc/share.md",
          "updatedTime": 1609673980000,
          "title": "开发小技巧",
          "nav": {
            "title": "文档",
            "order": 1,
            "path": "/zh-CN/doc"
          },
          "slugs": [],
          "locale": "zh-CN"
        },
        "title": "开发小技巧"
      },
      {
        "path": "/components",
        "meta": {},
        "exact": true,
        "redirect": "/components/edit-graph"
      },
      {
        "path": "/zh-CN/components",
        "meta": {},
        "exact": true,
        "redirect": "/zh-CN/components/edit-graph"
      }
    ],
    "title": "or_so",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
