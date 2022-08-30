const boxes = document.querySelectorAll(".box");
const playerText = document.getElementById("player");
const errorText = document.getElementById("error");
let player = "X";
let gameOver = false;
let winner;


function startGame() {
    playerText.textContent = `${player}'in Sırası !`

    boxes.forEach(box => box.addEventListener("click", () => chooseArea(box)))
}

function chooseArea(box) {
    if (box.textContent === "") {
        box.textContent = player;
        if (player === "O") {
            box.style.color = "red"
        }
        turnPlayer();
    } else {
        errorText.textContent = "Hey burası boş değil ! "
        box.style.border = "2px solid red"
        setTimeout(() => {
            errorText.textContent = ""
            box.style.border = "1px solid black"
        }, 2500)
    }

    checkWin();
    checkTie();

    if (gameOver) {
        playerText.textContent = `Oyun bitti, ${winner} Kazandı !`;
        boxes.forEach(box => box.style.pointerEvents = 'none');
    }
}

function turnPlayer() {
    if (player === "X") {
        player = "O";
        playerText.textContent = `${player}'nun Sırası !`
        return;
    } else if (player === "O") {
        player = "X";
        playerText.textContent = `${player}'in Sırası !`

    }
}

function checkWin() {
    // win
    checkRows()
    checkColumns()
    checkDiagonals()
}

function checkTie() {
    // tie
    const values = [];
    boxes.forEach(box => values.push(box.textContent))
    if (!values.includes("")) {
        playerText.textContent = "Berabere !";
        boxes.forEach(box => box.style.pointerEvents = 'none');
    }
}

function checkRows() {
    // check rows
    let row1 = boxes[0].textContent == boxes[1].textContent &&
        boxes[0].textContent == boxes[2].textContent && boxes[0].textContent !== ""
    let row2 = boxes[3].textContent == boxes[4].textContent &&
        boxes[3].textContent == boxes[5].textContent && boxes[3].textContent !== ""
    let row3 = boxes[6].textContent == boxes[7].textContent &&
        boxes[6].textContent == boxes[8].textContent && boxes[6].textContent !== ""

    if (row1 || row2 || row3) {
        gameOver = true
    }
    if (row1) return winner = boxes[0].textContent
    if (row2) return winner = boxes[3].textContent
    if (row3) return winner = boxes[6].textContent
}

function checkColumns() {
    // check cols
    let col1 = boxes[0].textContent == boxes[3].textContent &&
        boxes[0].textContent == boxes[6].textContent && boxes[0].textContent !== ""
    let col2 = boxes[1].textContent == boxes[4].textContent &&
        boxes[1].textContent == boxes[7].textContent && boxes[1].textContent !== ""
    let col3 = boxes[2].textContent == boxes[5].textContent &&
        boxes[2].textContent == boxes[8].textContent && boxes[2].textContent !== ""

    if (col1 || col2 || col3) {
        gameOver = true
    }
    if (col1) return winner = boxes[0].textContent
    if (col2) return winner = boxes[1].textContent
    if (col3) return winner = boxes[2].textContent
}

function checkDiagonals() {
    // check diag
    let dia1 = boxes[0].textContent == boxes[4].textContent &&
        boxes[0].textContent == boxes[8].textContent && boxes[0].textContent !== ""
    let dia2 = boxes[2].textContent == boxes[4].textContent &&
        boxes[2].textContent == boxes[6].textContent && boxes[2].textContent !== ""

    if (dia1 || dia2) {
        gameOver = true
    }
    if (dia1) return winner = boxes[0].textContent
    if (dia2) return winner = boxes[2].textContent
}

startGame();