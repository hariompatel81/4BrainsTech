let a1 = 10;
let a2 = 9;
let perimeter = 36;
let a3 = perimeter - (10+9);

let s = 36/2;

let temp = s*(s-a1)*(s-a2)*(s-a3);
let area = Math.sqrt(temp);
console.log("Area :"+area);