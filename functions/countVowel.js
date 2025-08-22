//count vowels
function countVowels(str){
    let count = 0;
    
    for(const char of str){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            count++;
        }
    }
    return count;
}

let result = countVowels("Hariom Patel");
console.log(result);