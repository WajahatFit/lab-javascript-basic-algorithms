// Iteration 1: Names and Input

function driver(hacker1) {
console.log(`The driver's name is ${hacker1}`);
}
driver ("Syed");
function navigator (hacker2) {
    console.log(`The Navigator's name is ${hacker2}`)
}
navigator("ali")
// Iteration 2: Conditionals
function nameLength(hacker1, hacker2){
    if (hacker1.length > hacker2.length ){
        console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
    }   else if (hacker1.length < hacker2.length ){
           console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    }   else {
               console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
           }
}
nameLength ("Syed","Wajahat");

/*
const hacker1 = "syed"
const hacker2= "Wajahat"
    if (hacker1.length > hacker2.length ){
        console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
    }else if (hacker1.length < hacker2.length ){
           console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    }else {
               console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
           } */

// Iteration 3: Loops

// 3.1
const driverName= "Syed";
let nameSepToUpperCase = driverName.toUpperCase().split('').join(' ');

//3.2
const driverName= "Syed";
const reversedName = "";
for(let i=driverName.length -1; i>0; i--){
    reversedName += driverName[i]; 
}

//3.3 
function namesLexicalOrdered(name1, name2){
    if(name1.localcompare(name2) < 0){
        return `The driver's name goes first.`
    }
    else if (name1.localcompare(name2) > 0){
        return `Yo, the navigator goes first definitely.`
    }
    else {
       return `What?! You both have the same name?` 
    }
}

namesLexicalOrdered("Syed","Wajahat");

