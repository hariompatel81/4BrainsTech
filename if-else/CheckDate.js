let day = 21;
let month = 2;
let year = 2025;

const date = new Date(year, month-1, day);

if(date.getDay() == day && date.getMonth() == month-1 && date.getFullYear() == year){
    console.log("Date is correct.");
}else{
    console.log("Date is Incorrect.");
}
