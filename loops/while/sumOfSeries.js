//11 WAP to calculate the sum of given series 1 - 2 + 3 - 4 + 5 - 6................n terms
let n = 34;
let i = 1;
let sum = 0;
while(i <= n){
    if(i%2 == 0){
        sum -= i; 
    }else{
        sum += i;
    }
    i++;
}
console.log(sum);