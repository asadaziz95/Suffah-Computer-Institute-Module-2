// while loop
// let bottles = 10;
// while (some condition is true) {
//     do something
//     }
// console.log('Number of bottles',bottles);
//console.log('While Loop');


// while (bottles < 0)
// {
//    // debugger;
//     console.log(`There were ${bottles} green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${bottles-1} green bottles hanging on the wall.`);
//     bottles--;
//     }

// console.log('Do While Loop');

// do {
// console.log(`There were ${bottles} green bottles, hanging on a wall. And if one
// ➥ green bottle should accidentally fall, there'd be ${bottles-1} green bottles
// ➥ hanging on the wall.`);
// bottles--;
// } while (bottles < 0)

// console.log('For Loop');
// // for (initialization ; condition ; update) {
// //     // do something
// //     }

// for(let bottles = 10;bottles > 0;bottles--){
//     console.log(`There were ${bottles} green bottles, hanging on a wall. And if one
// ➥ green bottle should accidentally fall, there'd be ${bottles-1} green bottles
// ➥ hanging on the wall.`);
// }
//,"cast","age","gender","city"
let questions = ["name","cast","age","gender","city"];
let answers = [];
let counter = 0;
const answersDiv = document.querySelector("#answers");
const ans = document.createElement('li')
while(counter < questions.length ){
    console.log("test",counter);
    let answer = prompt(`What is your ${questions[counter]}?`);
    answers.push(answer.trim().toLowerCase());
    counter++;
}
counter = 0;
while(counter < answers.length ){
    //debugger;
    answersDiv.innerHTML += `<li>Your ${questions[counter]} is ${answers[counter]}</li>`
// answersDiv.appendChild(ans)  
counter++;
}
// answersDiv.style.backgroundColor = 'Orange';





