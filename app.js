let boxes = document.querySelectorAll(".box");

let resetbtn = document.querySelector("#resetbtn");
let newbtn=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".msg-container");
let msg= document.querySelector("#msg");

let player1 = true;
let count = 0;
let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (player1) {
            box.innerText = "x";
            player1 = false;
        }
        else {
            box.innerText = "o";
            player1 = true;
        }
        box.disabled = true;
        wincheck();
count++;
if (count == 9  && msgcontainer.classList.contains("hide")) {
                msg.innerText = "Match Draw";
                msgcontainer.classList.remove("hide");
            }
    });
});

let resetGame = () => {
     player1 = true;
     enableBoxes();
     msgcontainer.classList.add("hide");
     count = 0;
}
let enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
}
let disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}
let showWinner =(winner)=>{
    msg.innerText="Winner is "+winner;
    msgcontainer.classList.remove("hide");  
  disableBoxes();
}
let wincheck = () => {
    for (let pattern of winPatterns) {
        let pos1value = boxes[pattern[0]].innerText;
        let pos2value = boxes[pattern[1]].innerText;
        let pos3value = boxes[pattern[2]].innerText;
        if (pos1value != "" && pos2value != "" && pos3value != "" ) {
            if (pos1value == pos2value && pos2value == pos3value) {
                showWinner(pos1value);
            }
           

        }
        
    }
}
    
resetbtn.addEventListener("click",resetGame);
newbtn.addEventListener("click",resetGame);
