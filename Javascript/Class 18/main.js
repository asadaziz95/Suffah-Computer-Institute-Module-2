// const list = document.createElement('ul');






// document.body.appendChild(list);




// function add(item){
//   const li = document.createElement('li');
//   li.innerHTML = item;
//   list.appendChild(li);
// }

// function toggle(item){
//     console.log();
//   item.classList.toggle('complete');
// }

// // add('Bake cake')
// // add('Sing song')
// // add('Read book')

// // toggle(list.firstChild);
// // toggle(list.lastChild);

// document.addEventListener('click',bang);
//document.addEventListener('click',bang);
// const redButton = document.getElementById('red');
// const greenButton = document.getElementById('green');

// const searchBtn = document.getElementById('searchButton');

// const searchInput = document.getElementById("search");




// redButton.addEventListener('click',
//  e => document.body.style.background = 'red');


//  greenButton.addEventListener('click', 
//  (e) => {
//     console.log('event',e);
//     document.body.style.background = e.target.textContent
//  }

//  );


//  searchBtn.addEventListener('click', 
//  (e) => {
//     searchInput.style.borderWidth = "2px"
//     searchInput.style.borderColor = "blue"
//     searchInput.style.width = "300px";
//  }

//  );





// function bang(){
//     document.body.style.background = 'yellow';
//     document.body.innerHTML = `<h1>BANG!!!</h1>`;
//     }

//forms

const form = document.forms.myForm;
const hello = document.getElementById('hello');

form.addEventListener('submit',sayHello);

function sayHello(e){
    e.preventDefault();
    hello.textContent = `Hello, ${form.myName.value}!`;
    }

