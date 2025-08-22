let l1 = prompt("Enter length of tiles :");
l1 = parseInt(l1);
let b1 = prompt("Enter breadth of tiles :");
b1 = parseInt(b1);
let l2 = prompt("Length of the region :");
l2 = parseInt(l2);
let b2 = prompt("Enter breadth of region :");
b2 = parseInt(b2);

let a1 = l1 * b1;
let a2 = l2 * b2;

let tiles = a2/a1;
console.log("Number of tiles requaired :"+tiles);
