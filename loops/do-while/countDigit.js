//count number of digit in number
let num = 1234;
let count = 0;
do{
    num = Math.floor(num/10);
    count++;
}while(num > 0);

console.log(count);
