let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let winContainer = document.querySelector(".winnerMsg");
let newgame = document.querySelector(".newGame");
let msg = document.querySelector("#msg");


let turnX = true;
let count=0;

const patterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("clicked");
    if (turnX) {
      box.style.color="white";
      box.innerHTML = "X";

      turnX = false;
    } else {
      box.style.color="black";
      box.innerHTML = "O";
      turnX = true;
    }
    box.disabled = true;
    count++;
    checkWinner();
  });
});



const checkWinner = () => {
  if(count=== 9){
    msg.innerHTML="Match Drawn";
    winContainer.classList.remove("hide");
    disabledButtons();
  }
  for (let pattern of patterns) {
    let pos0val = boxes[pattern[0]].innerHTML;
    let pos1val = boxes[pattern[1]].innerHTML;
    let pos2val = boxes[pattern[2]].innerHTML;

    if (pos0val != "" && pos1val != "" && pos2val != "") {
      if (pos0val === pos1val && pos1val === pos2val) {
        console.log(`winner is ${pos0val} `);
        displayWinner(pos0val);
      }
    }
  }
};


const displayWinner = (winner) => {
  msg.innerHTML = `Congratulations, Winner is ${winner}`;
  winContainer.classList.remove("hide");
  disabledButtons();
};

const disabledButtons = () => {
  for(let box of boxes) {
    box.disabled =true;
  }
};

const resetGame = () => { 
  turnX=true;
  count=0;
  for(let box of boxes) {
    box.disabled = false;  
    box.innerHTML ="";
  }
  winContainer.classList.add("hide");
};

resetbtn.addEventListener("click",resetGame);
newgame.addEventListener("click",resetGame);