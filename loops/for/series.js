/*24. WAP in C to display the n terms of harmonic series and
   their sum
   1 + 1/2 + 1/3 + 1/4 + 1/5 ... 1/n terms
   */
    let n = 12,sum = 0;
   for(let i = 1 ; i <= n ; i++){
        sum += 1/i; 
   }
   console.log(sum);
   
