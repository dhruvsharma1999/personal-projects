
const p1score = document.querySelector("#p1buttonDisplay")
const p2score = document.querySelector("#p2buttonDisplay")
const resetbutton = document.querySelector("#gamereset")

const p1update = document.querySelector("#p1upscore")
const p2update = document.querySelector("#p2upscore")

const playtoselect = document.querySelector("#playto")

p1InitialScore = 0;
p2InitialScore = 0;
isGameOver = false;
winningScore  = 3;

p1score.addEventListener('click', function(){
    
    if(!isGameOver){
        p1InitialScore += 1;
        
        if(p1InitialScore === winningScore){
            isGameOver = true
            p1update.classList.add('has-text-success')
            p2update.classList.add('has-text-danger')
            p1score.disabled = true;
            p2score.disabled = true;
        }
        p1update.textContent = p1InitialScore;
    }
})

p2score.addEventListener('click', function(){
    
    if(!isGameOver){
        p2InitialScore += 1;
        p2update.textContent = p2InitialScore;
        if(p2InitialScore === winningScore){
            isGameOver = true
            p2update.classList.add('has-text-success');
            p1update.classList.add('has-text-danger');
            p1score.disabled = true;
            p2score.disabled = true;
        }
        
        p2update.textContent = p2InitialScore;
    }
})

playtoselect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})

resetbutton.addEventListener('click', reset)

function reset(){
    isGameOver = false
    p1InitialScore = 0;
    p2InitialScore = 0;
    p1update.textContent = 0;
    p2update.textContent = 0;
    p1update.classList.remove('has-text-success', 'has-text-danger');
    p2update.classList.remove('has-text-success', 'has-text-danger');
    p1score.disabled = false;
    p2score.disabled = false;
    

}