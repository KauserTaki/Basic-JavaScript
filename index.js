//Mosh Hamedani's Tutorials...

//primitive type

let username = "kb"; //string literal
let age = 27; //number literal
let isApproved =false; //boolean literal
let firstName = undefined; 
let selectedColor = null;


//referrence type

//object.referrenceType
let person = {
    name: "kb",
    age: 27
};

//Dot Notation
person.name = "Kauser";

//Bracket Notation
let selection = "name";
person[selection] = "Badhon";
//person['name'] = "Taki";

console.log(person.name);

console.log(person);


//array.referrenceType

let selectedColors = ['blue', 'green'];
selectedColors[3] = 'white';
console.log(selectedColors);
selectedColors[2] = 3;
console.log(selectedColors);
console.log(selectedColors.length);


//function.referrenceType


//performing a task
function greet(name){
    console.log("Hellow " + name + ", you there???");
}

greet('Sir');


//calculating a value

function square(number){
    return number * number;
}

//let number = square(9);
console.log(square(9));
