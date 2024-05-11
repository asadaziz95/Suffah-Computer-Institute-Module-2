// // outer loop
// for(let i=1 ; i<13 ; i++)
// {
//     // inner loop
//     for(let j=1 ; j<6 ; j++){
//     console.log(`${j} multiplied by ${i} is ${i*j}`);
//     }
// }
// for(let i = 1 ;i<=100;i++){
//     if(i%5==0 && i%3==0){
//         console.log("FizzBuzz");
//     }
//     else if(i%3==0){
//         console.log("Fizz");
//     }
//     else if(i%5==0){
//         console.log("Buzz");
//     }
//     else{
//         console.log(i);
//     }
    
// }


let number = Math.ceil(Math.random()*10);
let numberOfCorrectAns = 0;
let isWrong = false;

while(!isWrong){
    const userSaysHigher = confirm(`The number is ${number}. Do you think the next number will be higher?`);
    const nextNumber = Math.ceil(Math.random()*10);
    if(nextNumber > number && userSaysHigher
         || nextNumber <= number && !userSaysHigher){
      alert(`Correct! It was ${nextNumber}.`);
      numberOfCorrectAns++;
    } else {
      alert(`Wrong! It was ${nextNumber}`);
      isWrong = true;
    }
}
alert(`No of correct answer ${numberOfCorrectAns}`)







