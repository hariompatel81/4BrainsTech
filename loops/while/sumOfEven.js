//10 WAP to calculate the sum of given series 2 4 6 8 10.....................n terms 
let n = 45;
let i = 1;
let sum = 0;
while(i <= n){
    if(i%2 == 0){
        sum +=i;
    }
    i++;
}
console.log(sum);