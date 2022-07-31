// Type Inference
let a = 'hello';

// string to string
a = 'bye';

// string to number: Error
// Error: 'number' 형식은 'string' 형식에 할당할 수 없습니다.
a = 123;

let player1 = {
  name: 'John',
  age: 22,
};

player1.name = 'Jane';
player1.age = 44;

// Type specification
let b: boolean = true;

let c: number[] = [1, 2, 3];
c.push(4);

// optional type
const player2: { name: string; age?: number } = { name: 'John' };

// const player2: {
//   name: string;
//   age?: number | undefined;
// }

if (player2.age && player2.age < 10) {
  // Error: 'undefined'인 것 같습니다.
  console.log(player2.age);
}

// Type Alias
type PlayerType = {
  name: string;
  age?: number;
};

const player3: PlayerType = { name: 'John' };
const player4: PlayerType = { name: 'James', age: 30 };
const player5: PlayerType = { name: 'Smith', age: 22 };

// function Type
function playerMaker(name: string): PlayerType {
  return {
    name,
  };
}

const james = playerMaker('james');
james.age = 33;

// Arrow Function Type
const playerArrowMaker = (name: string): PlayerType => ({
  name,
});

// readonly
type PlayerReadonlyType = {
  readonly name: string;
  age?: number;
};

const playerReadonlyMaker = (name: string): PlayerReadonlyType => ({
  name,
});

const smith = playerReadonlyMaker('smith');
smith.name = 'john';
// 읽기 전용 속성이므로 'name'에 할당할 수 없습니다.
smith.age = 20;

const readonlyNumbers: readonly number[] = [1, 2, 3];
readonlyNumbers.push(4);
// 'readonly number[]' 형식에 'push' 속성이 없습니다.

// Tuple
const tuple: [number, string, boolean] = [1, 'hello', true];

const tuple2: [number, string, boolean] = [1, 'hello'];
// '[number, string]' 형식은 '[number, string, boolean]' 형식에 할당할 수 없습니다. 소스에 2개 요소가 있지만, 대상에 3개가 필요합니다.

tuple[0] = 'hello';
// 'string' 형식은 'number' 형식에 할당할 수 없습니다.

// undefined, null
const u: undefined = undefined;
const n: null = null;

// any -> escape type checking, disable TypeScript
let anyValue: any = 'hello';
anyValue = 1;

// unknown
let unknownValue: unknown;

if (typeof unknownValue === 'string') {
  console.log(unknownValue.toLowerCase());
}

if (typeof unknownValue === 'number') {
  console.log(unknownValue.toFixed(2));
}

// void => function의 반환 값이 없음
function voidFunc(): void {
  console.log('void');
}

voidFunc().toFixed(2);
// 'void' 형식에 'toFixed' 속성이 없습니다.

// never
function error(): never {
  throw new Error();
}

function neverFunc(name: string | number) {
  if (typeof name === 'string') {
    // name: string
    return name.toUpperCase();
  } else if (typeof name === 'number') {
    // name: number
    return name.toFixed(2);
  } else {
    // name: never
    console.log(name);
  }
}

// Call Signature: describe type before function implementation
type MyFunc = (a: number, b: number) => number;

const myAddFunc: MyFunc = (a, b) => a + b;
const mySubFunc: MyFunc = (a, b) => a - b;
const myMultiFunc: MyFunc = (a, b) => a * b;
