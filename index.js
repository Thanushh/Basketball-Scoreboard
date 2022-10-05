let scoreH = document.getElementById("scoreH-el")
let scoreG = document.getElementById("scoreG-el")
let scoreHome = 0
let scoreGuest = 0



function plus1H() {
    scoreHome += 1
    scoreH.textContent = scoreHome
}

function plus2H() {
    scoreHome += 2
    scoreH.textContent = scoreHome
}

function plus3H() {
    scoreHome += 3
    scoreH.textContent = scoreHome
}

function plus1G() {
    scoreGuest += 1
    scoreG.textContent = scoreGuest
}

function plus2G() {
    scoreGuest += 2
    scoreG.textContent = scoreGuest
}

function plus3G() {
    scoreGuest += 3
    scoreG.textContent = scoreGuest
}

function newG() {
    scoreHome = 0
    scoreH.textContent = 0
    scoreGuest = 0
    scoreG.textContent = 0
}