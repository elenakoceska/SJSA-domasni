//1 zadaca

var age = prompt ("Enter your age");
var age_limit = 18;

if (age >= age_limit) {
    console.log("You are old enough to drive"); 
} else {
    console.log("You need to turn 18 years");
}


//2 zadaca

var month = prompt ('Enter month');

switch(month) {

case "January":
    console.log("January has 31 days");
break;
case "February":
    console.log("February has 28 days");
break;
case "March":
    console.log("March has 31 days");   
break;
case "April":
    console.log("April has 30 days");
break;
case "May":
    console.log("May has 31 days");
break;    
case "June":
    console.log("June has 30 days");
break;
case "July":
    console.log("July has 31 days");  
break;
case "August":
    console.log("August has 31 days");
break;    
case "September":
    console.log("September has 30 days");
break;    
case "October":
    console.log("October has 31 days"); 
break;    
case "November":
    console.log("November has 30 days");
break;    
case "December":
    console.log("December has 31 days");
break;
}      


// 3 zadaca

var band_num = 2;

if(band_num == 1) {
    console.log("the singer is solist");

} else if(band_num == 2) {
    console.log("the band is duo");

} else if(band_num == 3) {
    console.log("the band is trio");

} else if(band_num == 4) {
    console.log("the band is quartet");

} else if(band_num == 5) {
    console.log("the band is quintet");
}


// 4 zadaca

var salary = "an Associate's diploma";
 switch (salary) {
    case "No high school diploma":
        console.log("The salary is 200$");
    break;
    case "A high school diploma":
        console.log("The salary id 400$");
    break;
    case "an Associate's diploma":
        console.log("The salary is 500$");
    break;
    case "a Bachelor's degree":
        console.log("The salary is 700$");
    break;
    case "a Master's degree":   
        console.log("The salary is 800$");
    break;
    case "a Professional degree":
        console.log("The salary is 900$");
    break;
    case "a Doctoral degree":
        console.log("The salary is 1000$");
    break;           

 }