//18. WAP to calculate the sum of given series x^1 + x^2 + x ^3.........x^n 
let x =2;
let y = 1;
let num = 9;
let sum = 0;
while(num > 0){
    sum += Math.pow(x,y);
    num--;
    y++;
}
console.log("sum",sum);
