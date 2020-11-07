const Test = [
  {
    id: 1209,
    teamName: 'test',
    enble: 1,
    authGroupId: 1996,
    type: 'fild',
    value: 111,
    optionter: 'in',
  },
  {
    id: 1208,
    teamName: 'test',
    enble: 1,
    authGroupId: 1996,
    type: 'fild',
    value: 111,
    optionter: 'in',
  },
  {
    id: 3056,
    teamName: 'test',
    enble: 0,
    authGroupId: 2030,
    type: 'fild',
    value: 111,
    optionter: 'in',
  },
  {
    id: 30526,
    teamName: 'test',
    enble: 0,
    authGroupId: 2030,
    type: 'fild',
    value: 111,
    optionter: 'in',
  },
  {
    id: 30256,
    teamName: 'test',
    enble: 0,
    authGroupId: 20230,
    type: 'fild',
    value: 111,
    optionter: 'in',
  },
];

const data = {
  id: '1119',
  dataId: '123wqeeq',
  enble: 1,
};
const Obj: any = {};

const rules: any = [];
Test.forEach(item => {
  if (!Obj[item.authGroupId]) {
    Obj[item.authGroupId] = item.authGroupId;
    rules.push({
      authGroupId: data.id,
      id: item.authGroupId,
      ruleItems: [item],
    });
  } else {
    rules.forEach((items: any) => {
      if (items.id === item.authGroupId) {
        items.ruleItems.push({
          ...item,
        });
      }
    });
  }
});

const value = {
  id: data.id,
  dataId: data.dataId,
  enble: data.enble,
  rules: rules,
};
console.log(value, 'newData');

export const editData = [
  {
    class: 'hz',
    teamName: 'hz-http-proxy',
    teamPosition: 'aaaaa',
    id: 'vRZSjfDDDBndTeGx',
    teams: [
      {
        axis: [
          { row: 'one', column: '80' },
          { row: 'two', column: '12200' },
          { column: '12222' },
        ],
        teamPosition: 'test1',
      },
      {
        axis: [
          { row: 'one', column: '80' },
          { row: 'two', column: '12200' },
        ],
        teamPosition: 'test2',
      },
      {
        axis: [
          { row: 'one', column: '80' },
          { row: 'two', column: '12200' },
        ],
        teamPosition: 'test3',
      },
    ],
  },
  {
    class: 'sh',
    teamName: 'sh-http-proxy',
    teamPosition: 'bbbbb',
    id: '4XuIiPRjKMQFpI53',
    teams: [
      {
        axis: [
          { row: 'one', column: '80' },
          { row: 'two', column: '12200' },
          { column: '12222' },
        ],
        teamPosition: 'bbb1',
      },
      {
        axis: [
          { row: 'one', column: '80' },
          { row: 'two', column: '12200' },
        ],
        teamPosition: 'bbb2',
      },
      {
        axis: [
          { row: 'one', column: '80' },
          { row: 'two', column: '12200' },
        ],
        teamPosition: 'bbb3',
      },
    ],
  },
  {
    class: 'shp',
    teamName: 'sz-http-proxy',
    teamPosition: 'ccccc',
    id: '3o3ZCXdLaEXChDl8',
    teams: [
      {
        axis: [
          { row: 'one', column: '80' },
          { row: 'two', column: '12200' },
          { column: '12222' },
        ],
        teamPosition: 'ccc1',
      },
      {
        axis: [
          { row: 'one', column: '80' },
          { row: 'two', column: '12200' },
        ],
        teamPosition: 'ccc2',
      },
      {
        axis: [
          { row: 'one', column: '80' },
          { row: 'two', column: '12200' },
        ],
        teamPosition: 'ccc3',
      },
    ],
  },
];

export default Test;
