//check strong number
function isStrong(num){
    let digit,strong = 0;
    let x = num;
    while(num > 0){
        digit = num % 10;
        strong += fect(digit);
        num = Math.floor(num / 10);
    }
    if(x == strong){
        return true;
    }
    else{
        return false;
    }
}

function fect(num){
    let f = 1;
    while(num > 0){
        f *= num;
        num--;
    }
    return f;
}

console.log(isStrong(3));//1 2 145 