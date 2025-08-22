//for an given array of numbers, print the square of each value using the for each loop
let arr = [1,2,3,4,5,6,7,8];

arr.forEach((val)=>{
    console.log(val*val);
});

let newArr = arr.map((val)=>{
    return val*val; 
});

console.log(newArr);

let filterArr = arr.filter((val)=>{
   return val % 2 === 0;
})

console.log(filterArr);

let reduceArr = arr.reduce((res,curr)=>{ return res+curr;});
console.log(reduceArr);
