// let ch = prompt("Enter charecter :");
let ch = '@';
if('A' >= ch && 'Z' <= ch){
    console.log(ch+" is an uppercase letter");
}else if('a' >= ch && 'z' <= ch){
    console.log(ch+" is a lowercase letter");
}else if('0' >= ch && '9' <= ch){
    console.log(ch+" is a digit");
}else{
    console.log(ch+" is a special character");
}