// Type Inference
let a = 'hello';

// string to string
a = 'bye';

// string to number: Error
// Error TS2322: 'number' 형식은 'string' 형식에 할당할 수 없습니다.
a = 123;

let player = {
  name: 'John',
  age: 22,
};

player.name = 'Jane';
player.age = 44;

// Type specification
let b: boolean = true;

let c: number[] = [1, 2, 3];
c.push(4);
