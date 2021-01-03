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

<code src="@/myDemo/Share" />
