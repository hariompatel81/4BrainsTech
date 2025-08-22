let value = '@';
switch(true){
    case value >= 'a' && value <= 'z' || value >='A' && value <= 'Z' :
        console.log("Alphabet");
        break;

    case value >=0 && value <= 9 :
        console.log("Digit");
        break;

    default : 
        console.log("special cheracter");
}