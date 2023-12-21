let turn = true;

let btns = document.querySelectorAll('.btns');

let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let win = "";
let checkWinner = function() {
    for(let patterns of winPatterns){
        // console.log(patterns[0] ,patterns[1], patterns[2]);
        // console.log(btns[patterns[0]].innerText,btns[patterns[1]].innerText,btns[patterns[2]].innerText);
        
        let val1 = btns[patterns[0]].innerText
        let val2 = btns[patterns[1]].innerText
        let val3 = btns[patterns[2]].innerText

        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 === val2 && val2 === val3){
                alert(`${val1} is winner `);
                win = true;
            }
        }

    }
}

btns.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        if(turn){
            btn.innerText = "X";
            turn=false;
        } else {
            btn.innerText = "Y";
            turn=true;
        }
        if(win){
            btn.innerText = "";
        }
        btn.disabled = true;
        checkWinner();
    })

})
    