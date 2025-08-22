//5 WAP to print the series 1 3 5 7 9....................n terms 
let n = 54;
let i = 1;
while(i <= n){
    if(!(i % 2 == 0)){
        process.stdout.write(i+" ");
    }
    i++;
}
console.log();