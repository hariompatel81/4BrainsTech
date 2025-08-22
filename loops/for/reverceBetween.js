//21. WAP to print the reverse of all number from 101 to 199 
function reverce(num){
    let r ;
    let rev = 0;
    let x = num;
    while(x > 0){
        r = x % 10;
        rev = rev * 10 + r;
        x = Math.floor(x/10); 
    }
    return rev;

    // //another approach
   
    // return num.toString().split('').reverse().join('');
}

function printRev(start,end){
    for(start = 101; start <= end; start++){
        console.log(reverce(start));
    }
}

printRev(101,199);


// //by loops only
// let start = 101;
// let end = 102;
// for(start ; start <= end; start++){
//     // let l = start.toString().length;
    
//     console.log(start.toString().split('').reverse().join(''));
// }

