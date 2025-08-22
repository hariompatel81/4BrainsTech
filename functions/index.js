let n = prompt("Enter a number :");

let arr = [];
for(let i = 1; i <= n ; i++) {
    arr[i-1] = i;
}

let sum = arr.reduce((res,curr)=>res+curr);
console.log(sum);

let mul = arr.reduce((res,curr)=>res*curr);
console.log(mul);

(function(){console.log("hiii")}());
