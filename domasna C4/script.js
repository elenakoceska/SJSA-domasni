//1 zadaca

//prva varijanta
let color = ["violet", "blue", "green"];

console.log(color);
console.log(`My 1-st choice is:`);
console.log(color [0]);
console.log(`My 2-an choice is:`);
console.log(color [1]);
console.log(`My 3-rd choice is:`)
console.log(color [2]);


//vtora varijanta
let colors = {
    choice1: "violet",
    choice2: "blue",
    choice3: "green"
};

console.log(`My 1st choise is ${colors.choice1}, my 2nd choise is ${colors.choice2} and my 3rd choise is ${colors.choice3}`);




//2 zadaca

let prog_language = {
    name: "Java Script",
    founder: {
        name: "Brendan Eich",
        email: "beich@gmail.com"       
},
    founded: 1995
}

console.log(prog_language);
console.log(prog_language.name);
console.log(prog_language.founder.email);

//console.log(prog_language[prog_language.length-1]);

let prog_language1 = ["Java Script", "Brendan Eich", "beich.gmail.com", 1995];
prog_language1.push("file name .js");

prog_language1.unshift("Script Language");

console.log(prog_language1)
