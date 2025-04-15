let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const generatecompchoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomidx = Math.floor(Math.random() * 3); //provide random index to the array
  return options[randomidx];
};
const darwgame = () => {
  msg.innerText = "Game was draw.Play Again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userwin, userchoice, compchoice) => {
  if (userwin) {
    userscore++;
    userscorepara.innerText = userscore;
    msg.innerText = `you win!.your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "red";
  } else {
    compscore++;
    compscorepara.innerText = compscore;
    msg.innerText = `you lost. ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor = "green";
  }
};

const playgame = (userchoice) => {
  console.log("user choice=", userchoice);
  //generate comp. choice
  const compchoice = generatecompchoice();

  if (userchoice === compchoice) {
    darwgame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      //paper,scissors
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      //rock,scissor
      userwin = compchoice === "scissors" ? false : true;
    }
    if (userchoice === "scissors") {
      //rock,paper
      userwin = compchoice === "rock" ? false : true;
    }
    showWinner(userwin, userchoice, compchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});
