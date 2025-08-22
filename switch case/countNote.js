let amount = 343454;
let note;
switch(500){
    case 500 :
       note = amount / 500;
       console.log("500 notes :"+Math.floor(note));
       amount = amount % 500;

    case 200 :
        note = amount / 200;
        console.log("200 notes :"+Math.floor(note));
        amount = amount % 200;   

    case 100 :
        note = amount / 100;
        console.log("100 notes :"+Math.floor(note));
        amount = amount % 100;

    case 50 :
        note = amount / 50;
        console.log("50 notes :"+Math.floor(note));
        amount = amount % 50;

    case 20 :
        note = amount / 20;
        console.log("20 notes :"+Math.floor(note));       
        amount = amount % 20;

    case 10 :
        note = amount / 10;
        console.log("10 notes :"+Math.floor(note));       
        amount = amount % 10;

    case 5 :
        note = amount / 5;
        console.log("5 notes :"+Math.floor(note));       
        amount = amount % 5;

    case 2 :
        note = amount / 2;
        console.log("2 notes :"+Math.floor(note));      
        amount = amount % 2;

    case 1:
        note = amount / 1;
        console.log("1 notes :"+Math.floor(note));        
        amount = amount % 1;
        break;

    default : console.log("Invalid note");
       
}