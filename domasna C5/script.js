// zadaca 1
for(let i = 0; i <= 20; i++) {
    console.log(i) 
    
};

let num1 = 17;
  if(num1%2==0) {
    console.log(num1 + " is an Even Number");
  } else {
    console.log(num1 + " is an Odd Number");
  }

// zadaca 2

let num = 9;
for(let i = 0; i <= 10; i++) {
    console.log(i) 
    console.log(let =[num * i]);
};

// let n = (`%2 == 0`);

//     console,log(n);


// zadaca 3 

let number = 88;

if(number <=60) {
    console.log("You didn't pass the test, you got an F");

} else if(number >= 61 && number <= 70 ) {
    console.log(`For ${number} you got an D;`);

} else if(number >= 71 && number <= 80 ) {
    console.log(`For ${number} you got an C;`);

} else if(number >= 81 && number <= 90 ) {
    console.log(`For ${number} you got an B;`);

} else if(number >= 91 && number <= 100 ) {
    console.log(`For ${number} you got an A;`);
};


// zadaca 4

let tower = (`#`) 
console.log(tower);
console.log(tower + tower);
console.log(tower + tower + tower);
console.log(tower + tower + tower + tower);
console.log(tower + tower + tower + tower + tower);



// bonus zadaca

// for (var i = 1; i <= 8; i++) {
//     console.log(`black: ■; white □`);
// };

// for (var j = 1; j <= 8; j++) {
//     if ((i + j) % 2 != 0) {
//         //console.log("<td bgcolor='white'></td>");
//         console.log
//     }
//     else {
//         console.log
//     }
// };


// var height = 8; 
// var width = 8;
// var board = "";

//      for (var y = 0; y < height; y++) {   
//        for (var x = 0; x < width; x++) {
//          if ((x + y) % 2 == 0){
//            board += "□";
//          }
//          else if(x%(width-1) == 0){
//            board += "\n";
//          }
//          else{
//            board += "■";
//            }
//         }
//      };

//      console.log(board);



     var board1 = "";

        for (var y = 0; y < 8; y++) {

           for (var x = 0; x < 8; x++)
           {
             if ((x + y) % 2 == 0)
               board1 += "□";
             else
               board1 += "■";
           }

           board1 += "\n";
        }

        console.log(board1);

 