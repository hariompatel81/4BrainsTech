//8 WAP to print the fibonacci series 0 1 1 2 3 5 8 13..........................n terms
let a = 0;
let b = 1;
let num = 20;
let i = 1;
let c;


while(i <= num){
    process.stdout.write(a+" ");
    c = a + b;
    a = b;
    b = c;
    
    i++;
}
console.log();
