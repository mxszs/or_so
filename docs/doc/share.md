---
title: 开发小技巧
nav:
  title: 文档
  order: 1
---

```ts
type TypeParams = 'a' | 'b' | 'c';

type ExampleOneFn = (type: TypeParams) => number;

type ExampleTwoFn = (type: TypeParams) => void;

/**
 * -------------
 */

const exampleOne: ExampleOneFn = type => {
  if (type === 'a') {
    return 1;
  } else if (type === 'b') {
    return 2;
  } else {
    return 3;
  }
};

const transformExampleOne: ExampleOneFn = type => {
  // switch 也可以
  // 将数据抽象为对象，便于扩展
  const PARAMS = {
    a: 1,
    b: 2,
    c: 3,
  };
  // const PARAMSMAPS = new Map([
  //     ['a', 1],
  //     ['b', 2],
  //     ['c', 3],
  // ])
  // PARAMSMAPS.get(type)
  return PARAMS[type];
};

/**
 * -------------
 */

const exampleTwo: ExampleTwoFn = type => {
  if (type === 'a' || type === 'b') {
    console.log('xxx');
  }
};

const transformExampleTwo: ExampleTwoFn = type => {
  const TYPELIST = ['a', 'b'];
  const hasType = TYPELIST.includes(type);
  if (hasType) {
    console.log('xxx');
  }
};

/**
 * 取决开发的习惯吧。。
 */

const FLAG = true;

if (FLAG) {
  console.log('xxx');
}

FLAG && console.log('xxx');

/**
 * -------------
 * 相同配置的抽离
 */
```

![xx](https://cdn.nlark.com/yuque/0/2021/png/216243/1609665433147-eb74c863-7b5c-4716-af65-6528bd2bba23.png)

<code src="or_so/src/myDemo/Share" />

```js
// Boolean
!!Boolean;
// 创建mock 数据
new Array(10).fill(0).map(xx);
```

> 自定义代码片段

vscode
ES7 React/Redux/GraphQL/React-Native snippets
插件

```json
{
  "create react component": {
    "prefix": "creat component",
    "body": [
      "import React from 'react';",
      "",
      "type $0Props = {",
      "",
      "}",
      "",
      "const $0:React.FC<$0Props> = () => {",
      "",
      "  return (",
      "    <>111</>",
      "  )",
      "}",
      "export default $0;"
    ],
    "description": "import react"
  }
}
```

```js
// 快速切割字符串
[...'xxx']; // 只限于空

// 创建、编辑
const body = {
  userId: 'xxx',
  userName: 'xxx',
  // ...
};
// 编辑有时候加个id
id && Object.assgin(body, { id });

//
const updateBody = {
  id: 'xx',
  userId: 'xxx',
  userName: 'xxx',
};
// createBody 创建
const { id, ...createBody } = updateBody;

// 发请求，某个参数是可变的

const res = async type => {
  const paramType = type ? type : undefined;
  const { data } = await fetch(`xxx?JSON.stringify({a: 1, b: paramType })`);
};
```
