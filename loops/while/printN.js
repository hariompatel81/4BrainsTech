//4. WAP to print the series 1 2 3 4 5 ...................n
let n = 56;
let i = 1;
let result = "";
while(i <= n){
    // console.log(i+" ");
    process.stdout.write(i+" ");//print in single line work only nodejs
    result += i+" ";
    i++;
}
console.log();
console.log(result);