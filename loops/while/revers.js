//13 WAP to calculate the reverse of any given number 
let num = 12345;
let x = num;
let reverce = 0;
while(num > 0 ){
    let remender = num % 10;
    reverce = reverce * 10 + remender;
    num = Math.floor(num/10);
}
console.log("reverce of",x,"is",reverce);
