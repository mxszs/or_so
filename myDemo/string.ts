type Params = {
  testString: string;
  testBoolean: boolean;
  testNumber: number;
  testNull: null;
  testUndefined: undefined;
  testArray: Array<null>;
  testTuple: [number, string];
};

enum Color1 {
  red,
  green,
  blue,
}
let Green: Color1 = Color1.green;

enum Color2 {
  Red = 1,
  Green,
  Blue,
}
let ColorName: string = Color2[3];

enum Color3 {
  Red = 1,
  Green = 3,
  Blue = 4,
}
let colorAuto: string = Color3[4];

console.log(ColorName, colorAuto);

type labelledObj = {
  label: string;
};

function printLabels(labelledObj: labelledObj) {
  console.log(labelledObj.label);
}

let myObjs = { size: 10, label: 'Size 10 Object' };
printLabels(myObjs);

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  // ...
  return { color: config.color, area: 1 };
}

let mySquare = createSquare({ colour: 'red', width: 100 } as SquareConfig);
