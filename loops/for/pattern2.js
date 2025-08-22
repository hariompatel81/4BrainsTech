//rectenguler pattern

for(let i=0;i<5;i++){
    let line="";
    for(let j=0;j<9;j++){
        line += "*";
    }
    console.log(line);
}
console.log();

//shallow rectengle
for(let i=0;i<5;i++){
    let line = "";
    for(let j=0;j<9;j++){
        if(i==0 || i==4 || j==0 || j==8){
            line += "*";
        }else{
            line += " ";
        }
    }
    console.log(line);
}
console.log();

//right angle triangle left-align
for(let i=1;i<=5;i++){
    let line = "";
    for(let j=1;j<=i;j++){
        line += "*";
    }
    console.log(line);
}
console.log();


//inverted right angle triangle
for(let i=5;i>=1;i--){
    let line = "";
    for(let j=1;j<=i;j++){
        line += "*";
    }
    console.log(line);
}
console.log();

 
//Right-Aligned Inverted Triangle 
for(let i=5;i>=1;i--){
    let line = "";
    for(let j=5;j > i;j--){
        line += " ";
    }
    for(let k=1;k<=i;k++){
        line += "*";
    }
    console.log(line);
}
console.log();

// Right-Aligned Increasing Triangle
for(let i=1;i<=5;i++){
    let line = "";
    for(let j=1;j<=5-i;j++){
        line += " ";
    }
    for(let k=1;k<=i;k++){
        line += "*";
    }
    console.log(line);
}
console.log();