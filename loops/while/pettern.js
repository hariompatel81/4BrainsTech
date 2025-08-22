for(let i= 1;i<=5;i++){
    for(let j=5-i;j>=1;j--){
        process.stdout.write(" ");
    }
    for(let k=i;k>=1;k--){
        process.stdout.write("*");
    }
    console.log();
    
}