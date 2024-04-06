// picking up the button having the id='button1'
/*
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus illo, perspiciatis illum, inventore velit ut ea enim laudantium sequi expedita dignissimos. Repudiandae mollitia nostrum quas saepe accusantium, totam aliquid ducimus? 
*/
l
const button = document.getElementById('button1');
console.log("button" , button);
//defining colors list
const colors = ['red','orange','yellow','green','blue','rebeccapurple','violet']

// changing body background color
function change() {
document.body.style.background = colors[Math.floor(7*Math.random())];
}

// attached an event listener
button.addEventListener('click', change);