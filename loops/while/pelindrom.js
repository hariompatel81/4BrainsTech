//14 WAP to input a number and check it palindrome or not
let num = 121;
let x = num;
let reverce = 0;
let remender;
while(num > 0){
    remender = num % 10;
    reverce = reverce * 10 + remender;
    num = Math.floor(num/10);
}
if(x == reverce){
    console.log("Number is pelindrom number");
}else{
    console.log("Number is not pelindrom number");
}