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

// Overloading
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config: string | Config) => {
  if (typeof config === 'string') {
    console.log(config);
  } else {
    console.log(config.path);
  }
};

type MyFunc2 = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const myAddFunc2: MyFunc2 = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

// Polymorphism: 다양한 형태의 객체를 사용할 수 있다.
type MyFunc3 = {
  (a: number[]): void;
  (a: boolean[]): void;
};

const myLogFunc: MyFunc3 = (arr) => {
  arr.forEach((i) => console.log(i));
};

myLogFunc([1, 2, 3]);
myLogFunc([true, false, true, false]);
myLogFunc(['hello', 'world']);
// 이 호출과 일치하는 오버로드가 없습니다.

// 계속해서 Overloading을 추가해주는 것은 비효율적이다. 따라서, Generic을 활용해 여러 형태를 사용할 수 있도록 하는 것이 좋다.
type MyFunc4 = {
  <T>(a: T[]): void;
};
const myLogFunc2: MyFunc4 = (arr) => {
  arr.forEach((i) => console.log(i));
};

myLogFunc2([1, 2, 3]);
myLogFunc2([true, false, true, false]);
myLogFunc2(['hello', 'world']);
myLogFunc2([1, true, 'hello', 'world']);

function myLogFunc3<T>(arr: T[]): T {
  return arr[0];
}

const resultOfLogFunc1 = myLogFunc3([1, 2, 3]);
const resultOfLogFunc2 = myLogFunc3([true, false, true, false]);
const resultOfLogFunc3 = myLogFunc3(['hello', 'world']);
const resultOfLogFunc4 = myLogFunc3([1, true, 'hello', 'world']);

type User<E> = {
  name: string;
  extraInfo: E;
};

type UserFavColor = User<{ favColor: string }>;

const user1: UserFavColor = {
  name: 'smith',
  extraInfo: { favColor: 'gray' },
};

const user2: User<null> = {
  name: 'james',
  extraInfo: null,
};

// Class
class Player {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickname: string,
  ) {}
}

const john = new Player('john', 'smith', 'jsm_developer');
john.firstName;
// 'firstName' 속성은 private이며 'Player' 클래스 내에서만 액세스할 수 있습니다.

// abstract class: 상속은 가능하나, 인스턴스를 생성할 수 없다.
abstract class UserForPlayer {
  constructor(
    protected firstName: string,
    protected lastName: string,
    public nickname: string,
  ) {}
  abstract getNickname(): void;
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class PlayerWithUser extends UserForPlayer {
  getNickname() {
    this.getFullName();
    return `${this.nickname}`;
  }
}
const tom = new PlayerWithUser('tom', 'james', 'tj_developer');
tom.getNickname();

type Words = {
  [key: string]: string; // object의 key와 value의 Type이 모두 String, 즉, key의 값은 모르지만, Type을 설정할 때 활용한다.
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    // parameter가 Word class의 instance이기를 원할 때 class를 Type으로 사용할 수 있다.
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.definition;
    }
  }
  def(term: string) {
    return this.words[term];
  }
}

class Word {
  constructor(
    public readonly term: string,
    public readonly definition: string,
  ) {}
}

const water = new Word('water', '물');

const dict = new Dict();
dict.add(water);
dict.def('water');

// 특정 값을 가지게 Type을 설정할 수 있다.
type Team = 'red' | 'blue' | 'green';
type Health = 'healthy' | 'sick' | 'dead';
type Score = 1 | 5 | 10;

type AppUser = {
  nickname: string;
  team: Team;
  health: Health;
  score: Score;
};

const appUser1: AppUser = {
  nickname: 'james',
  team: 'red',
  health: 'healthy',
  score: 10,
};

// Interface: Object의 형태를 정의.
interface InterfaceAppUser {
  nickname: string;
  team: Team;
  health: Health;
  score: Score;
}

const appUser2: InterfaceAppUser = {
  nickname: 'smith',
  team: 'blue',
  health: 'sick',
  score: 1,
};

interface WaitingUser {
  name: string;
}
interface WaitingUser {
  isWaiting: boolean;
}

interface CurrentUser extends WaitingUser {}

const kelly: CurrentUser = { name: 'kelly', isWaiting: false };
