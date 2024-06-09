// let message = "Hello";

// let arr = [...message]

// // arr.reverse().join('')
// // console.log(arr);
// console.log([..."Hello"].reverse().join(''));

// ['🍏','🍌','🥕'].forEach(
//     (item,index,array) => { 
//         console.log(`Item at position ${index} is ${item}
//          (there are ${array.length} items in total).`)
//     }
// )

// const suits = ['♠️','♦️','♣️','❤️'];
// const values = ['Ace',2,3,4,5,6,7,8,9,'Jack','Queen','King'];
// const deck = [];
// debugger;
// suits.forEach(suit =>
//     values.forEach(value =>
//     deck.push(`${value} of ${suit}`)
//     )
//     )

// const items = ["🍏","🍌","🥕"]
// debugger;
// const result = items.map(
//     (value,index,array) =>{ 
//         console.log(value);
//        return value + '😊';
//     }
// );
// console.log(result);
// const arr = [1,2,3] 
// const result = arr.map(n => n*n);
// console.log(result);


// const list = document.getElementById('list');

// list.innerHTML = ['Apple','Banana','Carrot'].map(item => `<li>${item}</li>`.join());

// const arr = [1,2,3]
// arr.reduce(
//     (acc,value) =>
//         {
//             console.log("acc",acc);
//             console.log("value",value);
//             console.log("acc + value",acc + value)
//             return acc + value
//         }
//     );


// const arr =[1, 2, 3, 4] 
// const result = arr.filter(x => x > 2);

// console.log("result",result);

// const arr = [ 0, 1, '0', false, true, 'hello' ]
// const result = arr.filter(Boolean);
// console.log(result);
// [ 0, 1,false, true]
// [false, true]


// const alfie = {
//     name: 'Alfie',
//     glasses: false,
//     hat: false
//     };
//     const betty = {
//     name: 'Betty',
//     glasses: true,
//     hat: true
//     };
//     const gemma = {
//     name: 'Gemma',
//     glasses: false,
//     hat: true
//     };
//     const del = {
//     name: 'Del',
//     glasses: true,
//     hat: false
//     };

//     const people = [alfie,betty,gemma,del];
//     console.log("Before",people)
//     const result = people.filter(person => 
//         person.glasses && person.hat)
//         .map(person => person.name);

//     console.log("After",result)


const arr = ['C','C++','Ruby','Python','JavaScript','Swift','Java']
const result = arr.some(word =>{
    console.log(word);
    word.length > 7
    }); 

//arr.every(word => word.length > 1);


console.log('result',result);


// ['C','C++','Ruby','Python','JavaScript','Swift','Java'].some(word => word.length > 7);