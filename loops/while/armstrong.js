//15 WAP to input 3 digit number and check it is armstrong or not
let num = 153;
let x = num;
count = 0;
let a = 0;
while( x > 0){
    count++;
    x = Math.floor(x/10);
}
x = num;
while(x > 0){
    let remender = x % 10;
    a += Math.pow(remender,count);
    x = Math.floor(x/10);
}
if(a == num){
    console.log(num,"is armstrong number");
}else{
    console.log(num,"is not armstrong number");
}
