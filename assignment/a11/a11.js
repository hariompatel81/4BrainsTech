let area = 320;
let base = 8;
let height = 5;

let mul = 0.5 * base * height;
let xSquare = area / mul;
let x = Math.sqrt(xSquare);

base = base * x;
height *= x;

console.log(`base is ${base}m.`);
console.log(`height is ${height}m.`);