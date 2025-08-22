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

let obj2 = JSON.parse(JSON.stringify(obj));

console.log(obj);
console.log(obj2);

obj.social.facebook.acc1 = "changed";
console.log(obj.social.facebook.acc1);
console.log(obj2.social.facebook.acc1);

