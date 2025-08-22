//print reverse of a number
let num = 1234;
let digit,rev = 0;
do{
    digit = num % 10;
    rev = rev * 10 + digit;
    num = Math.floor(num/10); 
}while(num > 0);
console.log(rev);
