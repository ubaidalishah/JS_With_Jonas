const againBtn = document.querySelector("#again-btn");
const middleBox = document.querySelector("#middle_box");

const checkBtn = document.querySelector("#check_btn");
let outputText = document.querySelector("#output_text");
// let highScore = document.querySelector("#high_score");
// console.log(checkBtn);
let randomNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
// document.querySelector("#high_score").textContent = highScore;
checkBtn.addEventListener("click", function () {
  let inputNumber = document.querySelector("#input_number");
  inputNumber = parseInt(inputNumber.value);
  console.log(inputNumber);

  console.log(randomNumber);
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

    // document.body.style.color = "Black";
  }
  // when the guess is high
  else if (inputNumber > randomNumber) {
    if (score > 1) {
      outputText.textContent = "The Guess is High";
      score = score - 1;
      document.querySelector("#score").textContent = score;
    } else {
      outputText.textContent = "You Lost";
      document.querySelector("#score").textContent = 0;
    }
  }
  // when the guess is low
  else if (inputNumber < randomNumber) {
    if (score > 1) {
      outputText.textContent = "The Guess is Low";
      score = score - 1;
      document.querySelector("#score").textContent = score;
    } else {
      outputText.textContent = "You Lost";
      document.querySelector("#score").textContent = 0;
    }
  }
});
// Again button functionality
againBtn.addEventListener("click", () => {
  outputText.textContent = "Start Guessing...";
  middleBox.textContent = "?";
  document.querySelector("#input_number").value = "";
  document.body.style.backgroundColor = "#1d293d ";
  console.log("again btn is clicked");
  score = 20;
  document.querySelector("#score").textContent = score;
  randomNumber = Math.floor(Math.random() * 20 + 1);
});
