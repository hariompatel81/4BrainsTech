//23. WAP to print all strong number from 101 to 999

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

function findStrong(start,end){
    for(start = 101; start <=199 ;start++){
        if(isStrong(start)){
            console.log(start);
        }
    }
}

findStrong(101,199);
