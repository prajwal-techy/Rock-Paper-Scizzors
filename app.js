let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice")  // acessing all choices to select any one
const msg = document.querySelector("#msg");

const userSCOREpar= document.querySelector("#user-score");
const compSCOREpar= document.querySelector("#comp-score")

const genCompchoice = () =>{
    const options=["rock","paper","scizzors"];
    const ranIdx=Math.floor(Math.random()  *3); // generates number from beyween 0 to 2 which will be considered as the index
    return options[ranIdx];  // indexes will be generated and elements will get

}

// winnig pattern

const drawgame = () =>{
   // console.log("game was draw.");
    msg.innerText = "Game was Draw. Play again";
       msg.style.backgroundColor = " #081b31";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        userSCOREpar.innerText=userScore
        //console.log("you win!");
        msg.innerText = `You win!. Your ${userChoice} beats ${compChoice}`;
        //msg.style.backgroundColor = "green";

    }else{
        compScore++;
        compSCOREpar.innerText = compScore;
        // console.log("you lose");
        msg.innerText = `You lose!. ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundColor = "red";
    }

};





const playGame =(userChoice) =>{ //  generates random turn by computer it can be r p s
    console.log("user choice=", userChoice)
    // Generate computer choice
    const compChoice= genCompchoice();
    console.log("comp choice=",compChoice);

 


    //winning conditions

    if(userChoice === compChoice) {
        // draw game
        drawgame();
        return;
    }  else {
        let userWin= true;
        if (userChoice === "rock")  {
            //scizzors,paper
            userWin = compChoice ==="paper" ? false : true
        }else if (userChoice === "paper"){
            //rock,scizzors 
            userWin = compChoice === "scizzors" ? false :true;
        }else {
            //rock,paper
          userWin =  compChoice === "rock" ? false :true;
        } 
    showWinner(userWin,userChoice,compChoice);
    }

};

choices.forEach((choice) =>{    // all indepdant choices will be selected in the choices, and the event listner will track each choices clicked
    choice.addEventListener("click",() =>{
        let userChoice =choice.getAttribute("id");  // we can get id thet is rock pap or scis and we can print it  
       // console.log("choice was clicked",userChoice);
        playGame(userChoice)

    });
});
