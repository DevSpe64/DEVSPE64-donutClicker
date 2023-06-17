const loreButton = document.getElementById('lore')

const lore = document.querySelector('.lore-info')

lore.style.display = "none"

loreButton.addEventListener('click', function(){
    if (lore.style.display == "none"){
        lore.style.display = ""
    } else {
        lore.style.display = "none"
    }
})

let doughCount = 0

let autoCost = 100

let autoAmount = 0

const clicker = document.querySelector('.clicker')



function addDough(){


    const doughHeader = document.querySelector('.dough-display')

    doughHeader.innerHTML = doughCount
}

clicker.addEventListener('click', function() {
    doughCount ++
    addDough()
    buttonToggle()
})

const autoButton = document.querySelector('.ac-button')

function addAuto(){
    const autoHeader = document.querySelector('.ac-display')

    autoHeader.innerHTML = autoAmount

    const autoCostHeader = document.querySelector('.ac-cost')

    autoCostHeader.innerHTML = Math.floor(autoCost)
}


autoButton.addEventListener('click', function(){
    if (doughCount >= autoCost) {
        doughCount -= Math.floor(autoCost)
        autoAmount ++
        autoCost *= 1.1
        addDough()
        addAuto()
        autoClick()
        buttonToggle()
    }

})

function autoClick(){
    doughCount += autoAmount
    const doughHeader = document.querySelector('.dough-display')

    doughHeader.innerHTML = doughCount
}

setInterval(autoClick,1000)

let resetButton = document.querySelector('.exit-button')



    function resetGame() {
        if (confirm("You sure you want reset your donuts?") == true) {
        autoAmount = 0;
        doughCount = 0;
        autoCost = 100;
        document.querySelector(".dough-display").innerText = doughCount;
        document.querySelector(".ac-display").innerHTML = autoAmount;
        document.querySelector(".ac-cost").innerText = autoCost;
        clearInterval(set)
            }
    }
    document.getElementById("ac-click").disabled = true;
    function buttonToggle() {
        if (doughCount < autoCost) {
        document.getElementById("ac-click").disabled = true;
        } else {
        document.getElementById("ac-click").disabled = false;
        }
    }

    
