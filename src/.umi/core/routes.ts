import { ApplyPluginsType } from '/Users/orso/Desktop/learn/myDoc/node_modules/_@umijs_runtime@3.0.18@@umijs/runtime/dist/index.js';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/_demos/radio-button",
    "component": require('../../myDemo/Form/RadioButton.tsx').default
  },
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('/Users/orso/Desktop/learn/myDoc/node_modules/_@umijs_preset-dumi@1.0.13@@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"en-US":{"*":[{"path":"/","title":"or_so","meta":{}}],"/components":[{"title":"Modal","path":"/components/modal","meta":{},"children":[{"path":"/components/modal","title":"自定义组件","meta":{"order":2}},{"path":"/components/modal/test","title":"test","meta":{}}]},{"title":"Radio","path":"/components/radio","meta":{},"children":[{"path":"/components/radio","title":"自定义组件","meta":{"order":1}}]}],"/doc":[{"path":"/doc","title":"标题内容","meta":{}},{"path":"/doc/description","title":"描述","meta":{}}],"/guide":[{"path":"/guide","title":"标题内容","meta":{}}]},"zh-CN":{"/zh-CN/guide":[{"path":"/zh-CN/guide","title":"标题内容","meta":{}}],"*":[{"path":"/zh-CN","title":"or_so","meta":{}}],"/zh-CN/components":[{"title":"Modal","path":"/zh-CN/components/modal","meta":{},"children":[{"path":"/zh-CN/components/modal","title":"自定义组件","meta":{"order":2}},{"path":"/zh-CN/components/modal/test","title":"test","meta":{}}]},{"title":"Radio","path":"/zh-CN/components/radio","meta":{},"children":[{"path":"/zh-CN/components/radio","title":"自定义组件","meta":{"order":1}}]}],"/zh-CN/doc":[{"path":"/zh-CN/doc","title":"标题内容","meta":{}},{"path":"/zh-CN/doc/description","title":"描述","meta":{}}]}},"locales":[{"name":"en-US","label":"English"},{"name":"zh-CN","label":"中文"}],"navs":{"en-US":[{"path":"/doc","title":"文档"},{"title":"指南","path":"/guide"},{"title":"组件","path":"/components"},{"title":"GitHub","path":"https://github.com/mxszs"}],"zh-CN":[{"path":"/zh-CN/doc","title":"文档"},{"title":"指南","path":"/zh-CN/guide"},{"title":"组件","path":"/zh-CN/components"},{"title":"GitHub","path":"https://github.com/mxszs"}]},"title":"or_so","logo":"https://avatars2.githubusercontent.com/u/33783716?s=60&v=4","mode":"site"},
      ...props,
    }),
    "routes": [
      {
        "path": "/",
        "component": require('../../../docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1585927080000,
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
        "path": "/components/modal",
        "component": require('../../../docs/components/Modal/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/Modal/index.md",
          "updatedTime": null,
          "title": "自定义组件",
          "nav": {
            "title": "组件",
            "path": "/components"
          },
          "order": 2,
          "slugs": [
            {
              "depth": 3,
              "value": "自定义组件",
              "heading": "自定义组件"
            }
          ],
          "group": {
            "path": "/components/modal",
            "title": "Modal"
          }
        },
        "title": "自定义组件"
      },
      {
        "path": "/components/modal/test",
        "component": require('../../../docs/components/Modal/test.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/Modal/test.md",
          "updatedTime": null,
          "title": "test",
          "slugs": [
            {
              "depth": 1,
              "value": "test",
              "heading": "test"
            },
            {
              "depth": 2,
              "value": "test1",
              "heading": "test1"
            },
            {
              "depth": 2,
              "value": "one",
              "heading": "one"
            },
            {
              "depth": 2,
              "value": "Two",
              "heading": "two"
            },
            {
              "depth": 2,
              "value": "Three",
              "heading": "three"
            },
            {
              "depth": 2,
              "value": "Four",
              "heading": "four"
            }
          ],
          "nav": {
            "path": "/components",
            "title": "组件"
          },
          "group": {
            "path": "/components/modal",
            "title": "Modal"
          }
        },
        "title": "test"
      },
      {
        "path": "/components/radio",
        "component": require('../../../docs/components/Radio/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/Radio/index.md",
          "updatedTime": null,
          "title": "自定义组件",
          "order": 1,
          "slugs": [
            {
              "depth": 3,
              "value": "自定义组件",
              "heading": "自定义组件"
            }
          ],
          "nav": {
            "path": "/components",
            "title": "组件"
          },
          "group": {
            "path": "/components/radio",
            "title": "Radio"
          }
        },
        "title": "自定义组件"
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
          "updatedTime": 1585927080000,
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
          "updatedTime": 1585927080000,
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
        "path": "/zh-CN/components/modal",
        "component": require('../../../docs/components/Modal/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/Modal/index.md",
          "updatedTime": null,
          "title": "自定义组件",
          "nav": {
            "title": "组件",
            "path": "/zh-CN/components"
          },
          "order": 2,
          "slugs": [
            {
              "depth": 3,
              "value": "自定义组件",
              "heading": "自定义组件"
            }
          ],
          "group": {
            "path": "/zh-CN/components/modal",
            "title": "Modal"
          },
          "locale": "zh-CN"
        },
        "title": "自定义组件"
      },
      {
        "path": "/zh-CN/components/modal/test",
        "component": require('../../../docs/components/Modal/test.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/Modal/test.md",
          "updatedTime": null,
          "title": "test",
          "slugs": [
            {
              "depth": 1,
              "value": "test",
              "heading": "test"
            },
            {
              "depth": 2,
              "value": "test1",
              "heading": "test1"
            },
            {
              "depth": 2,
              "value": "one",
              "heading": "one"
            },
            {
              "depth": 2,
              "value": "Two",
              "heading": "two"
            },
            {
              "depth": 2,
              "value": "Three",
              "heading": "three"
            },
            {
              "depth": 2,
              "value": "Four",
              "heading": "four"
            }
          ],
          "nav": {
            "path": "/zh-CN/components",
            "title": "组件"
          },
          "group": {
            "path": "/zh-CN/components/modal",
            "title": "Modal"
          },
          "locale": "zh-CN"
        },
        "title": "test"
      },
      {
        "path": "/zh-CN/components/radio",
        "component": require('../../../docs/components/Radio/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/Radio/index.md",
          "updatedTime": null,
          "title": "自定义组件",
          "order": 1,
          "slugs": [
            {
              "depth": 3,
              "value": "自定义组件",
              "heading": "自定义组件"
            }
          ],
          "nav": {
            "path": "/zh-CN/components",
            "title": "组件"
          },
          "group": {
            "path": "/zh-CN/components/radio",
            "title": "Radio"
          },
          "locale": "zh-CN"
        },
        "title": "自定义组件"
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
        "redirect": "/components/radio"
      },
      {
        "path": "/zh-CN/components",
        "meta": {},
        "exact": true,
        "redirect": "/zh-CN/components/radio"
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
