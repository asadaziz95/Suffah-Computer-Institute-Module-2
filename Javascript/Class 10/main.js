//let stuName = 'Ali';

//console.log(Boolean(stuName));

//Boolean(3422)//true
//Boolean(0) //false

// nine value that are falsy forever

// double quoted empty string literal
//""
// single quoted empty string literal
//''
// empty template literal
//``
// zero
//0
// negative zero (considered different to 0 by JavaScript!)
//-0
// Not a Number is falsy
//NaN
// this one is obvious ...
//false
// null is falsy
//null

// undefined is also falsy
//undefined

//negation
//!true; // negating true returns false
//<< false
//!0; // 0 is falsy, so negating it returns true
//<< true
//!'hello'; // all non-empty strings are truthy
//<< false

// double negation
// !!''; // empty strings are falsy
// << false
// !!"hello"; // all non-empty strings are truthy
// << true
// !!3; // all non-zero numbers are truthy
// << true
// !!0; // zero is falsy
// << false

// let answer = 41;

// console.log(answer == 43);

// program to find the ASCII value of a character

// take input from the user
// const string = prompt('Enter a character: ');

// // convert into ASCII value
// const result = string.charCodeAt(0);

// console.log(`The ASCII value is: ${result}`)

// if statement
// const percent = Number(prompt('What is your percentage?'));

// if(percent > 40){
//     alert('Passed')
// }
// else{
//     alert('Fail')
// }

// const percentage = Number(prompt('What is you percentage?'));

// if(percentage <=100){
//     if(percentage >=80){
//         alert("A+")
//     }
//     else if(percentage >=70){
//         alert("A")
//     }
//     else if(percentage >=60){
//         alert("B")
//     }
//     else if(percentage >=50){
//         alert("C")
//     }
//     else if(percentage >=40){
//         alert("D")
//     }
//     else if(percentage >=33){
//         alert("E")
//     }
//     else{
//     alert("F")
//     }

// }
// else{
//     alert("Please write percentage between 0 to 100")
// }

// write a program taking age as  input from user and check  if he is eligible to
// take the ride?

// conditions
// age greater or equal to 18
// age less then 70 or equal

// const age = Number(prompt('What is your age?'))
// if(age>=18 && age<=70){
//     console.log('You are eligible to take this ride');
// }
// else{
//     console.log('Sorry! you are not eligible to take this ride');
// }

//ternary operator

// age>=18 && age<=70 ?
// console.log('You are eligible to take this ride') :
// console.log('Sorry! you are not eligible to take this ride');

// age > 20 ? console.log('your age is ok') :
// age > 40 ? console.log('your age is ok'):
// console.log('your age is not ok')

//  favourite game
// const big = confirm('Is it a big animal?');
// const livesInWater = confirm('Does it live in water?');

// if(big && livesInWater){
//     alert('You favourite animal is whale')
// }
// else if(big && !livesInWater){
//     alert('You favourite animal is elephant')
// }
// else if(!big && livesInWater){
//     alert('You favourite animal is fish')
// }
// else if(!big && !livesInWater){
//     alert('You favourite animal is mouse')

// }

// const legs = Number(prompt('How many legs does your favorite animal have?'));
// if (legs === 0) {
// alert('Your favorite animal is a fish!');
// } else if (legs === 2) {
// alert('Your favorite animal is a penguin!');
// } else if(legs === 4){
// alert('Your favorite animal is an elephant!');
// } else if(legs === 8){
// alert('Your favorite animal is an octopus!');
// } else {
// alert(`I'm not sure what animal has that many legs!`);
// }

// const legss = Number(prompt('How many legs does your favorite animal have?'));
// switch (legss) {
// case 0:
// alert('Your favorite animal is a fish!');
// break;
// case 2:
// alert('Your favorite animal is a penguin!');
// break;
// case 4:
// alert('Your favorite animal is an elephant!');
// break;
// case 8:
// alert('Your favorite animal is an octopus!');
// break;
// default:
// alert(`I'm not sure what animal has that many legs!`);
// }

//game rock paper ans scissors

const player = prompt("Choose Rock , Paper and scissors").toLowerCase().trim();
const number = Math.ceil(3 * Math.random());
let computer;
switch (number) {
  case 1:
    computer = "rock";
    break;
  case 2:
    computer = "paper";
    break;
  case 3:
    computer = "scissors";
}

if (player === computer) {
  alert(`It was a draw, we both chose ${player}`);
} else if (
  (player === "rock" && computer === "scissors") ||
  (player === "paper" && computer === "rock") ||
  (player === "scissors" && computer === "paper")
) {
  alert(`You win! ${player} always beats ${computer}!`);
}
else {
    alert(`You lose! ${player} will never beat ${computer}!`);
    }