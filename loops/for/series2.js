/*25. Calculate the sum of following serires
   1/x + 1/x^2 + 1/x^3......1/x^n
   */

   let x = 2, n = 5, sum = 0;
   
   for(let i = 1; i <= n; i++){
        sum += 1/Math.pow(x,i);
   }
   console.log(sum);
   