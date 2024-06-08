// {
//  key:value,
//code:"space"
// }

// document.addEventListener('keydown',e => document.body.innerHTML = `<div>e.code:${e.code}</div><div>e.key: ${e.key}</div>`);

// const input = document.getElementById('input');
// const output = document.getElementById('output');

// input.addEventListener('keyup', e => output.textContent = input.value);

// input.addEventListener('keydown', e => output.textContent = input.value);

// document.addEventListener('mousemove',showCoords)

// function showCoords(event){
//     document.body.textContent = `(${event.x},${event.y})`;
//     }
function stylingBomb (bomb){
  bomb.innerHTML = '💣';
  bomb.style.position = 'absolute';
  bomb.style.top = Math.floor(200*Math.random()) + 'px';
  bomb.style.left = Math.floor(200*Math.random())+'px';
  const cordsObj = {
    top:bomb.style.top,
    left:bomb.style.left
  }
  console.log("cordsObj",JSON.stringify(cordsObj));
  localStorage.setItem("bombCords",JSON.stringify(cordsObj))
  bomb.style.fontSize = '64px';
  hideBomb(bomb)
}

function hideBomb (bomb){
  bomb.style.opacity = '0';
}
function showBomb (bomb){
  bomb.style.opacity = '1';
  bomb.innerHTML = '💣';
  bomb.style.position = 'absolute';
  const bombCords = JSON.parse(localStorage.getItem("bombCords"))
  const {top,left} =  bombCords;  // obejct strucrting
  bomb.style.top = top;
  bomb.style.left = left;
  console.log(bombCords);
  document.body.appendChild(bomb);
}

// function stop() {
//   document.removeEventListener("mousemove", move);
// }

const bomb = document.createElement('div');
stylingBomb(bomb);
  document.body.appendChild(bomb);

  bomb.addEventListener('mouseover', e => {
    showBomb(bomb)
    document.body.style.opacity = '1';
    document.body.style.background = 'red';
    // document.body.innerHTML = '<h1>BOOOOOOM!!!</h1>';
    document.body.appendChild(`<h1>BOOOOOOM!!!</h1>`);
   
    });

// bomb.addEventListener('click', e => {
//  
//     document.body.style.background = 'red';
//     document.body.innerHTML = '<h1>BOOOOOOM!!!</h1>';
//     });

// const star = document.querySelector("#star");

// star.addEventListener("mousedown", start);
// star.addEventListener("mouseup", stop);

// function start(e) {
//   document.addEventListener("mousemove", move);
// }

// function move(e) {
//     // if(e.x < 100 && e.y < 100){
//         star.style.left = `${e.x}px`;
//         star.style.top = `${e.y}px`;
//     //}
  
// }

