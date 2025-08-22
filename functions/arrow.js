//create an arrow function to count vowels
const countVowels = (str)=>{
     let count = 0;
    
    for(const char of str){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            count++;
        }
    }
    return count;
}

console.log(countVowels("tanish"));


