const againBtn = document.querySelector("#again-btn");
const middleBox = document.querySelector("#middle_box");
const checkBtn = document.querySelector("#check_btn");
let outputText = document.querySelector("#output_text");
let randomNumberGenerator = function () {
  randomNumber = Math.floor(Math.random() * 20 + 1);
  return randomNumber;
};
randomNumber = randomNumberGenerator();
let score = 20;
let highScore = 0;

// game logic
const gameLogicFunction = function () {
  let inputNumber = Number(document.querySelector("#input_number").value);

  // when there is no input
  if (!inputNumber) {
    outputText.textContent = "No Number Enterd";
  }

  // when the guess is correct
  else if (inputNumber === randomNumber) {
    middleBox.textContent = inputNumber;
    outputText.textContent = "Correct Number";
    document.body.style.backgroundColor = "green";
    if (highScore < score) {
      highScore = score;
      document.querySelector("#high_score").textContent = highScore;
    }
  }

  // when the guess is wrong
  else if (inputNumber !== randomNumber) {
    if (score > 1) {
      outputText.textContent =
        inputNumber > randomNumber ? "The Guess is High" : "The Guess is Low";
      score = score - 1;
      document.querySelector("#score").textContent = score;
    } else {
      outputText.textContent = "You Lost";
      document.querySelector("#score").textContent = 0;
    }
  }
};

// game reset
const gameResetFunction = () => {
  outputText.textContent = "Start Guessing...";
  middleBox.textContent = "?";
  document.querySelector("#input_number").value = "";
  document.body.style.backgroundColor = "#1d293d ";
  score = 20;
  scoreTextContent = score;
  randomNumber = randomNumberGenerator();
};

// check btn functionality
checkBtn.addEventListener("click", gameLogicFunction);

// Again button functionality
againBtn.addEventListener("click", gameResetFunction);
