// const food = document.querySelector('#food');
// const broccoli = document.createElement('li');

// const text = document.createTextNode('Broccoli');

// const span = document.createElement('span');

// const emoji = document.createTextNode('🥦');

// const apple = food.children[0];
// const banana = food.children[1];
// const carrot = food.children[2];



// span.appendChild(emoji);
// broccoli.appendChild(span)
// broccoli.appendChild(text);


// food.insertBefore(broccoli,apple);

// // //carrot.remove()

// const lemon = document.createElement('li');
// lemon.innerHTML = `<span> 🍋 </span>Lemon`;
// food.replaceChild(lemon,banana);

// console.log(apple.getAttribute('class'));

// broccoli.setAttribute('class', 'veg');

// console.log(broccoli.className);

// banana.className = 'veg'


// apple.classList.add('fruit2');

// apple.classList.remove('fruit1');


// console.log(
// apple.classList.contains('fruit'));


// //apple.style.border = '1px solid red';
// // apple.style.backgroundColor = 'red'; //background-color


// apple.classList.add('highlighted');


// const list = document.createElement('ul');
// document.body.appendChild(list);

// function add(item){
//     const li = document.createElement('li');
//     li.innerHTML = item;
//     list.appendChild(li);
// }


// add('Bake cake');
// add('Sing song');
// add('Read book');


// function toggleClass(item){
//     item.classList.toggle('complete');
// }


const yourText =  'This is my link'
const a = document.createElement('a')
const yourLink = 'www.google.com'
a.setAttribute('href',yourText )
a.innerHTML=yourLink;
a.classList.add('biglink') ;
