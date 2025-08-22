let side1 = 54;
let side2 = 34;
let side3 = 777;

if((side1 + side2 > side3)&&(side2 + side3 > side1)&&(side1 + side3 > side2) ){
    console.log("Valid triangle.");
}else{
    console.log("Invalid triangle.");
}