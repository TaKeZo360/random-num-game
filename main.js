let rNum = Math.floor(Math.random() * 98 + 1);
console.log(rNum);
let theClass = 0;
let inputText = document.getElementById('userInput');
let sendInput = document.getElementById('sendInput');
let inputActions = document.getElementById('inputActions');

sendInput.addEventListener('click', () => {
  playground()
  inputText = "";
})

function playground() {
  let userInput = inputText.value;
  updateHtml(`<You> ${userInput}`, '#B5B9E2')
  setTimeout(ifChecks, 1000, userInput);
  theClass += 1;
}

function ifChecks(userInput) {
  if (!userInput.trim()) return updateHtml('<Game> empty', 'red');
  userInput = Number(userInput);
  if (isNaN(userInput)) {
    updateHtml('<Game> Send A Number Bitch', 'red');
  } else if (userInput === rNum) {
    updateHtml(`<Game> You Won The Game Bitch`, 'yellow');
  } else if (userInput > 99 || userInput < 0) {
    updateHtml('<Game> less then 99 more then 1 Bitch', 'red');
  } else if (userInput > rNum) {
    updateHtml(`<Game> Less Then ${userInput} Bitch`, 'red')
  } else if (userInput < rNum) {
    updateHtml(`<Game> More then ${userInput} Bitch`, 'red');
  }
  theClass += 1;
}

function updateHtml(gameText, color) {
  let player = document.createElement('p');
  player.textContent = gameText;
  player.style.color = color;
  player.classList.add(`parNo${theClass}`)
  player.style.animation = `slide 1s ease alternate`;
  if (theClass !== 0) {
    let preEle = document.querySelector(`.parNo${theClass - 1}`);
    preEle.classList.remove(`parNo${theClass - 1}`);
  }
  inputActions.appendChild(player);
}
