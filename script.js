const humanChosen = document.querySelector("#human-chosen"); 
const comChosen = document.querySelector("#com-chosen"); 
const humanScoreText = document.querySelector("#human-score");
const comScoreText = document.querySelector("#com-score");
const restartBtn = document.querySelector("#restart");
const choicesBtn = document.querySelectorAll(".choice-buttons button");
const resultDiv = document.querySelector("#result");

let humanScore = 0;
let comScore = 0;
let clicks = 0;
const choices = Array.from(choicesBtn).map((button) => button.id);

function idToIcon(s){
    if(s==="rock") return '🪨';
    else if(s==="paper") return '📃';
    else return '✂️';
}

function calculation(humanChoice){
    if(clicks >= 5) return;
    let comChoice = choices[Math.floor(Math.random() * choices.length)];
    humanChosen.textContent = idToIcon(humanChoice);
    comChosen.textContent = idToIcon(comChoice);

    if((humanChoice=="rock" && comChoice=="scissor")||
    (humanChoice=="paper" && comChoice=="rock") ||
    (humanChoice=="scissor" && comChoice=="paper")){
        humanScore++;
    }
    else if((comChoice=="rock" && humanChoice=="scissor")||
    (comChoice=="paper" && humanChoice=="rock") ||
    (comChoice=="scissor" && humanChoice=="paper")){
        comScore++;      
    }
    
    clicks++;
    humanScoreText.textContent = humanScore;
    comScoreText.textContent = comScore;

    if (clicks >= 5) { 
        displayResult();
    }
}

function displayResult() { 

    let result = "";
    if (humanScore > comScore) {
        result = "You Win :)";
    } else if (humanScore < comScore) {
        result = "You Lose :(";
    } else {
        result = "It's a Tie :/";
    }
    resultDiv.textContent = result;
    restartBtn.style.display = "block";
    choicesBtn.forEach(button => {
        button.style.display = "none";
    });
}

function startGame(){
    choicesBtn.forEach(button => {
        button.style.display = "block";
    });
    restartBtn.style.display = "none";
    humanChosen.textContent = "-";
    comChosen.textContent = "-";
    humanScoreText.textContent = 0;
    comScoreText.textContent = 0;
    resultDiv.textContent = "";
    humanScore = 0;
    comScore = 0;
    clicks = 0;
}

choicesBtn.forEach(button => {
    button.addEventListener("click", () => {
        calculation(button.id);
    });
});
restartBtn.addEventListener("click", startGame);
startGame();
