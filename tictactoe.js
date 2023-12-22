let turn = true;
let firstPage = document.querySelector('#firstPage');
let winMessage = document.getElementById('winMessage');
let btns = document.querySelectorAll('.btns');
let reset = document.querySelector('#reset');
let newGame = document.querySelector('#newGame');

let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let win = "";
let checkWinner = function () {
    for (let patterns of winPatterns) {
        // console.log(patterns[0] ,patterns[1], patterns[2]);
        // console.log(btns[patterns[0]].innerText,btns[patterns[1]].innerText,btns[patterns[2]].innerText);

        let val1 = btns[patterns[0]].innerText
        let val2 = btns[patterns[1]].innerText
        let val3 = btns[patterns[2]].innerText

        if (val1 != "" && val2 != "" && val3 != "") {

            if (val1 === val2 && val2 === val3) {
                document.getElementById('firstPage').scrollIntoView({ behavior: 'smooth' });
                winMessage.classList.remove('drawing');
                winMessage.classList.add('success');
                winMessage.innerText = `${val1} is winner `;
                win = true;
            }
        }

    }
}

let draw = () => {
    if ([...btns].every(btn => btn.innerText !== "")) {
        document.getElementById('firstPage').scrollIntoView({ behavior: 'smooth' });
        winMessage.classList.add('draw');
        winMessage.classList.remove('success');
        winMessage.innerText = "It's a draw!";
        return true;
    }
}

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (turn) {
            btn.innerText = "X";
            btn.classList.add('x-turn');
            turn = false;
        } else {
            btn.innerText = "O";
            btn.classList.add('y-turn');
            turn = true;
        }
        // if(win){
        //     btn.innerText = "";
        // }
        btn.disabled = true;
        checkWinner();
        draw();
    })

})

reset.addEventListener("click", () => {
    btns.forEach((btn) => {
        btn.innerText = "";
        btn.disabled = false;
        turn = true;
    });
})

newGame.addEventListener("click", () => {
    btns.forEach((btn) => {
        btn.disabled = false;
        btn.innerText = "";
    });
});
