const duck = {
    name: 'Quacky',
    legs: 2,
    quack() {
    alert('QUACK! QUACK!');
    }
    };


// dot notation
// const keyName = "name";
// console.log('duck.legs',duck.legs);
//
// console.log('duck[name]',duck["name"]);
// console.log(duck[keyName]);
// console.log(duck.hand);

// console.log('arms' in duck);
// console.log('legs' in duck);

//method calling
// duck.quack();
// duck['quack']();


// duck.hands = 10;

// console.log('duck after change',duck);

//Object.freeze(duck);

// duck.hands = 0;

// console.log('duck before change',duck);

// delete duck.legs;

// console.log(duck);

// const shapes = {
//     triangle: { sides: 3,color:'white' },
//     square: { sides: 4 },
//     pentagon: { sides: 5 },
//     hexagon: { sides: 6 },
//     octagon: { sides: 8 },
//     megagon: { sides: 10e6 },
//     }
// console.log(shapes.triangle.sides)
// console.log(shapes['megagon']['sides']);
// const chooseShape = prompt("Write shape name to get sides.");
// alert(shapes[chooseShape]['sides']);

// alert(shapes[chooseShape].sides);

// console.log(shapes[chooseShape]['sides']);


// const square = {
//     sides: 4,
//     length: 5,
//     logThis() {console.log(this)},
//     perimeter() { return this.sides * this.length },
//     area() { return this.length * this.length }
//     }
//     // console.log('this',this);
// console.log(square.logThis()['logThis']);


//roll the dice

// const dice = {
//     sides: 6,
//     roll() {
//     return Math.ceil(Math.random()*this.sides);
//     }
//     }
// let diceSides = dice.roll();

// console.log(diceSides);

// dice.sides = 4;

// console.log('dice.roll()',dice.roll());

// Create a list object that has an array property called items and an add
// and remove() method that can be used to add items to the list. For
// example, list.add('Apples') should add Apples to the list.items array.

const list = {
    items:[],
    add(item) {
        this.items.push(item)
        return this.items;
    },
    remove(item){
        let indexOfItem = this.items.indexOf(item);
        this.items.splice(indexOfItem,1);
        return this.items;
    }
}


