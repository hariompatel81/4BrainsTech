//9 WAP to calculate the sum of given series 1 2 3 4 5 6 7 ................n terms 
let n = 45;
let i = 1;
let sum = 0;

// sum = (n*(n+1))/2; //by formula
while(i <= n){
    
    sum += i; 
    i++;
}
console.log("Sum of "+n+" numbers :"+sum);

