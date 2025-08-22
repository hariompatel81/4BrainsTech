//19. WAP to calculate the sum of series 1/1! + 2/2! + 3/3!.......n\n! 
let num = 5;
let fect = 1;
let i = 1;
let sum = 0;
while(i <= num){
    fect *= i;
    sum += i/fect;
    i++;
}
console.log("sum :",sum);
