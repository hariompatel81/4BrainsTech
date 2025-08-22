//20. WAP to print all prime number from 101 to 199 
let start = 101;
let end = 199;
let i=2;
let prime ="";
for(start;start <= end;start++){
    for(i=2 ;i < Math.floor(start/2) ; i++){
        if(start % i == 0){
            break;
        }
    }
    if(i == Math.floor(start/2)){
        prime += start+" ";
    }
}
console.log(prime);

