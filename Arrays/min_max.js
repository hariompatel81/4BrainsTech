//fine minimum and maximum element of an array
let arr = [3,4,5,6,67,6,7,6,7,7,56,5,65,543,3,33,33,3];
let max = arr[0];
let min = arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i] > max){
        max = arr[i];
    }
    if(arr[i] < min){
        min = arr[i];
    }
}
console.log(max);
console.log(min);
