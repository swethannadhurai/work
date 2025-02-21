const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const rollButton = document.getElementById("rollDice");
const winnerText = document.getElementById("winner");
const resetGame = document.getElementById("reset");

function rollDice(){

    const roll1= Math.floor(Math.random() *6)+1;
    const roll2 = Math.floor(Math.random() *6)+1;

    dice1.src=`./assests/dice${roll1}.png`;
    dice2.src=`./assests/dice${roll2}.png`;

    if(roll1 > roll2){
        winnerText.textContent="Player 1 wins! 🎉";
    }
    else if(roll2 > roll1){
        winnerText.textContent = "Player 2 wins! 🎉";
    }
    else{
        winnerText.textContent = "It's a tie! 🙋";
    }
}

function reset(){
    dice1.src="./assests/dice1.png";
    dice2.src="./assests/dice1.png";
    winnerText.textContent="";
}

rollButton.addEventListener("click",rollDice);
resetGame.addEventListener("click", reset);