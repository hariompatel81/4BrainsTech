let side1 = 45;
let side2 = 46;
let side3 = 47;
switch(true){
    case (side1 == side2 && side2 == side3) :
        console.log("equilateral triangle");
        break;

    case (side1 == side2 || side2 == side3 || side3 == side1):
        console.log("isosceles triangle");
        break;

    default : console.log("scalene triangle")
        
}