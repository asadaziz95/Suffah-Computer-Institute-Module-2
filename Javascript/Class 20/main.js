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

const items = ["🍏","🍌","🥕"]
debugger;
const result = items.map(
    (value,index,array) =>{ 
        console.log(value);
       return value + '😊';
    }
);
console.log(result);
