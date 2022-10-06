let scoreH = document.getElementById("scoreH-el")
let scoreG = document.getElementById("scoreG-el")
let scoreHome = 0
let scoreGuest = 0

function activeClass(){
    if(scoreHome > scoreGuest){
        scoreH.classList.add("score-active")
        scoreG.classList.remove("score-active")
    }
    else if(scoreHome == scoreGuest){
        scoreH.classList.remove("score-active")
        scoreG.classList.remove("score-active")
    }
    else{
        scoreG.classList.add("score-active")
        scoreH.classList.remove("score-active")
    }
}

function increaseScoreH(score){
    scoreHome += score
    scoreH.textContent = scoreHome
    activeClass()
}
function increaseScoreG(score){
    scoreGuest += score
    scoreG.textContent = scoreGuest
    activeClass()
}

function newG() {
    scoreHome = 0
    scoreH.textContent = 0
    scoreGuest = 0
    scoreG.textContent = 0
}