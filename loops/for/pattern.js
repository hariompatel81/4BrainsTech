//triangle pattern

for(let i = 1;i <= 5;i++){
    let line = "";
    for(let j = 1; j <= 5-i; j++){
        line += " "; 
    }
    for(let k = 1; k <= 2*i-1 ; k++){
        line += "*";
    }
    console.log(line);
}

/*
let n = 5; // height of the triangle

for (let i = 1; i <= n; i++) {
  let str = "";

  // single loop to handle both spaces and stars
  for (let j = 1; j <= n + i - 1; j++) {
    if (j <= n - i) {
      str += " "; // print space
    } else {
      str += "*"; // print star
    }
  }

  console.log(str);
}

*/