//17. WAP to calculate x^y (x to the power y)
let x = 2;
let y = 4;
let c = y;
let p =1 ;
// while(y > 0){
//     p *=x;
//     y--;
// }
// console.log(x,"to the power",c,"is :"+p);


function pow(x,y){
    while(y>0){
        p *= x;
        y--;
    }
    return p;
}
let temp = pow(x,y);
console.log(x,"to the power",c,"is :"+temp);
