// sum of digit of number
let num = 1234;
let sum = 0;
let digit;
do{
    digit = num % 10;
    sum += digit;
    num = Math.floor(num/10);
}while(num > 0);

console.log(sum);