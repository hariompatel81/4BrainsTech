//22. WAP to print all palindrome number from 101 to 199 

let start = 101;
let end = 199;
let reverse;
for(start ; start <= end; start++){
    reverse = start.toString().split('').reverse().join('');
    if(start == reverse){
        console.log(start);
    }
}
