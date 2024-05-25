// const hello = document.getElementById('greeting');
// // console.log("hello==>",hello);
// // console.log("hello.innerHtml",hello.innerHTML);

// const userName = prompt('What is your name?');
// hello.innerHTML = `Hello, <em>${userName}!</em>`;

// const food = document.getElementById('food');

// const items = document.getElementsByTagName('li');

// console.log("items==>",items);

// geting last element from array/collection
//items[items.length-1]

// const fruit = document.getElementsByClassName('fruit');
// console.log("fruit==>",fruit);

// const food = document.querySelector('#food');

// console.log("<=={food}==>",food);

// console.log(document.querySelectorAll('.fruit'));
// const carrot = document.querySelector('ul#food li:last-child');

// console.log('carrot',carrot);


// const food = document.querySelector('#food');

// const children = food.children

// const firstChild = children[0];

// const parentNode  = firstChild.parentNode;

// console.log('parentNode',parentNode);

const melon = document.createElement('li');
melon.innerHTML = `<b>Melon</b>`;

const intro = document.createElement('p');
intro.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore delectus distinctio cumque. Ab, culpa? Voluptates impedit velit ut blanditiis! Molestias, in. Maiores facilis commodi cumque voluptatibus earum. Facilis, quia quasi."
//melon.textContent
const food = document.querySelector('#food');

food.appendChild(melon)
console.log('melon',melon);
console.log('intro',intro);








