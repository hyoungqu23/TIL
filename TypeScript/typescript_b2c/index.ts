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
