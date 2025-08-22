//12 WAP to program to calculate the factorial of any given number.
let n = 9;
let i = 1;
let fect = 1;
while(i <= n){
    fect *= i;
    i++;
} 
console.log("Fectorial of "+n+" is :"+fect);