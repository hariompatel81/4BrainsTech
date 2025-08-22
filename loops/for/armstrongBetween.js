//23. WAP to print all armstrong number from 101 to 999
let temp,l,digit;

for(start = 101;start <= 999;start++){
    let armstrong = 0;
    temp = start;
    l = start.toString().length;
    while(temp > 0){
        digit = temp % 10;
        armstrong += Math.pow(digit,l);
        temp = Math.floor(temp/10); 
    }
    if(armstrong === start){
        console.log(start);
    }
}