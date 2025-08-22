//Q.4 Write a program to sort the array
let arr = [1,3,5,6,3,5,8,9,34];
console.log("Befor sorting---->");
console.log(arr);

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i] > arr[j]){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        }
    }
}

console.log("after sorting------>");
console.log(arr);

