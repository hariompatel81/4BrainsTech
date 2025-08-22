//Q.3 Write a program to reverse the array.
let arr = [1,2,3,4,5,6,7];
for(let i = 0; i <= Math.floor(arr.length/2) ; i++){
    let temp = arr[i];
    arr[i] = arr[arr.length-i-1];
    arr[arr.length-i-1] = temp;
   
}
console.log(arr);
