let a = 123;
let b = 235;
let c = 234;
if(a>b){
    if(a>c){
        console.log(a+" is gretest.");
    }else{
        console.log(c+" is gretest.");
    }
}
else if(b>c){
    console.log(b+" is gretest.")
}
else{
    console.log(c+" is gretest.");
}