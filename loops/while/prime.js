//16. WAP to enter an integer number and check it is prime or not
let num =13;
let i=2;
while(num-1 >= i){
if(num % i == 0){
    break;
}
i++;

}

if(i == num){
    console.log("prime");
    
}else{
    console.log("not prime");
    
}