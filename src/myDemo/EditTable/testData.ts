
const Test = [
    {
        id: 1209,
        name: 'test',
        enble: 1,
        authGroupId: 1996,
        type: 'fild',
        value: 111,
        optionter: 'in'
    },
    {
        id: 1208,
        name: 'test',
        enble: 1,
        authGroupId: 1996,
        type: 'fild',
        value: 111,
        optionter: 'in'
    },
    {
        id: 3056,
        name: 'test',
        enble: 0,
        authGroupId: 2030,
        type: 'fild',
        value: 111,
        optionter: 'in'
    },
    {
        id: 30526,
        name: 'test',
        enble: 0,
        authGroupId: 2030,
        type: 'fild',
        value: 111,
        optionter: 'in'
    },
    {
        id: 30256,
        name: 'test',
        enble: 0,
        authGroupId: 20230,
        type: 'fild',
        value: 111,
        optionter: 'in'
    },
]

const data = {
    id: '1119',
    dataId: '123wqeeq',
    enble: 1,
}
const Obj:any = {};

const rules:any = []
Test.forEach(item => {
    if (!Obj[item.authGroupId]) {
        Obj[item.authGroupId] = item.authGroupId;
        rules.push({
            authGroupId: data.id,
            id: item.authGroupId,
            ruleItems: [item],
        })
    } else {
        rules.forEach((items: any) => {
            if (items.id === item.authGroupId) {
                items.ruleItems.push({
                    ...item,
                })
            }
        })
    }
})


const value = {
    id: data.id,
    dataId: data.dataId,
    enble: data.enble,
    rules: rules,
}
console.log(value, 'newData')





export default Test;