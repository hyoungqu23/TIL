// module 불러오기
const calc = require("./calc");
const randomColor = require('randomcolor');

console.log(calc);
console.log(calc.add(1, 2));
console.log(calc.add(4, 5));
console.log(calc.sub(10, 2));

let color1 = randomColor();
let color2 = randomColor();
let color3 = randomColor();

console.log(color1, color2, color3);