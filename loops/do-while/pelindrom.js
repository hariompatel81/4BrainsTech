//check number is pelindrom or not
let num = 121,digit,rev = 0;
let x = num;
do{
    digit = num % 10;
    rev = rev * 10 + digit;
    num = Math.floor(num/10); 
}while(num > 0);
if(x === rev){
    console.log(x,"is pelindrom."); 
}else{
    console.log(x,"is not pelindrom.");
}
