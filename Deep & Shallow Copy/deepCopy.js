let obj = {
    name:"hariom",
    age:21,
    social:{
        facebook:{
            acc1:"hp@gmail.com",
            acc2:"hp@gmail.com"
        },
        twitter:{
            free:{
                acc1:"hp@gmail.com"
            },
            paid:{
                acc1:"hp@gmail.com"
            }
        }
    }
}

function makeDeepCopy(obj){
    if(typeof obj !== 'Object' || obj === null){
        return obj;
    }

    let copiedval = Arrays.isArray(obj) ? [] : {} ;
    let keys = Object.keys(obj);

    for(let i=0;i<keys.length;i++){
        copiedval[keys[i]] = makeDeepCopy(obj[keys[i]]);
    }
    return copiedval;
}

let obj2 = makeDeepCopy(obj);
console.log(obj2);