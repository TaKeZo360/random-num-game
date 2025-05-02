let rNum = Math.floor(Math.random() * 98 + 1);
console.log(rNum);
let inputText = document.getElementById('userInput');
let sendInput = document.getElementById('sendInput');
let inputActions = document.getElementById('inputActions');

sendInput.addEventListener('click', () => {
  playground()
})

function playground() {
  let userInput = inputText.value;
  updateHtml(`<You> ${userInput}`, '#B5B9E2')
  setTimeout(ifChecks, 1000, userInput)
}

function ifChecks(userInput) {
  if (!userInput.trim()) return updateHtml('<Game> empty', 'red');
  userInput = Number(userInput);
  if (isNaN(userInput)) {
    updateHtml('<Game> Not a number', 'red');
  } else if (userInput === rNum) {
    updateHtml(`<Game> You Won The Game`, 'yellow');
  } else if (userInput > 99 || userInput < 0) {
    updateHtml('<Game> less then 99 more then 1', 'red');
  } else if (userInput > rNum) {
    updateHtml(`<Game> Less Then ${userInput}`, 'red')
  } else if (userInput < rNum) {
    updateHtml(`<Game> More then ${userInput}`, 'red');
  }
}

function updateHtml(gameText, color) {
  let player = document.createElement('p');
  player.textContent = gameText;
  player.style.color = color;
  inputActions.appendChild(player);
}