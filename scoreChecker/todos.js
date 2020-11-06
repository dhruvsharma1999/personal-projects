const p1 = {
    score: 0,
    button: document.querySelector("#p1buttonDisplay"),
    display: document.querySelector("#p1upscore")
}

const p2 = {
    score: 0,
    button: document.querySelector("#p2buttonDisplay"),
    display: document.querySelector("#p2upscore")
}


const resetbutton = document.querySelector("#gamereset")
const playtoselect = document.querySelector("#playto")

isGameOver = false;
winningScore  = 3;

function updateScore(player, oponent){
    if(!isGameOver){
        player.score += 1;
        
        if(player.score === winningScore){
            isGameOver = true
            player.display.classList.add('has-text-success')
            oponent.display.classList.add('has-text-danger')
            player.disabled = true;
            oponent.disabled = true;
        }
        player.display.textContent = player.score;
    }

}

p1.button.addEventListener('click', function(){
    updateScore(p1,p2)
})

p2.button.addEventListener('click', function(){
    updateScore(p2, p1)
})


playtoselect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})

resetbutton.addEventListener('click', reset)

function reset(){
    isGameOver = false
    p1.Score = 0;
    p2.Score = 0;
    p1.display.textContent = 0;
    p2.display.textContent = 0;
    p1.display.classList.remove('has-text-success', 'has-text-danger');
    p2.display.classList.remove('has-text-success', 'has-text-danger');
    p1.display.disabled = false;
    p2.display.disabled = false;
    

}