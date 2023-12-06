let winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9], //Vertical
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9], // horizontal
    [1, 5, 9],
    [3, 5, 7], // diagonal
];

const boxElement = document.querySelectorAll(".box");
let click = 0;
let xAttempts = [];
let oAttempts = [];
let isWon = false;


const msgBox = document.getElementById("message");
const resultBox = document.getElementById("result");


boxElement.forEach((box, index) => {
    box.onclick = handleClick;
});

function handleClick(event) {
    // console.log(event.target);
    // console.log(event.target.id);

    let id = event.target.id;
    let pTag = document.createElement("p");
    pTag.setAttribute("class", "text");
    pTag.style.color = "#F6B343";


    boxElement[id - 1].appendChild(pTag);

    if (click % 2 == 0) {
        pTag.innerText = "X";
        xAttempts.push(parseInt(id));
        result(xAttempts, "X");

    } else {
        pTag.innerText = "O";
        oAttempts.push(parseInt(id));
        result(oAttempts, "O");
    }
    click++;

    if(click === 9 && isWon == false){ 
        resultBox.style.visibility ="visible";
        msgBox.innerText = "It's a tie 🤝 ";
}

}

function result(playersArray, player) {
    for (let i = 0; i < winningCombinations.length; i++) {
        let check = true;
        for (let j = 0; j < winningCombinations[i].length; j++) {
            if (!playersArray.includes(winningCombinations[i][j])) 
            {
                check = false;
                break;
            }
        }

        if (check) {
            isWon = true;
            resultBox.style.visibility = "visible";
            msgBox.innerText = `${player}'s has won..!! 🥳`;
        }
    }
}

document.getElementById("button").onclick = () => {
    location.reload();
};