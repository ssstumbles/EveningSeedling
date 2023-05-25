
console.log(`working`)

const letsGrow = document.getElementById(`start`)
const treeIntro = document.getElementById(`treeintro`)
const introBlock = document.getElementById(`intro`)
const openModal = document.querySelector(`.open-modal`)
const modalText = document.getElementById(`tree-modal`)
const closeModal = document.getElementById(`close`)
const openEventModal = document.querySelector(`.modal`)
const eventModalText = document.querySelector(`.event-modal`)
const closeEventModal = document.getElementById(`close-modal`)
const choiceField = document.getElementById(`choice-field`)

//functions
const noGame = () => {
    treeIntro.style.display = `none`
    introBlock.style.display = `flex`
}
const startGame = () => {
    treeIntro.style.display = `flex`,
        introBlock.style.display = `none`
}
const startModal = () => {
    modalText.style.display = `flex`
}
const startClose = () => {
    modalText.style.display = `none`
}
//part 2 - tree choice
const defaultPage = () => {
    eventModalText.style.display = `none`,
        choiceField.style.display = `none`
}
const modal = () => {
    eventModalText.style.display = `flex`
}
// const close = () => {
//     eventModalText.style.display = `none`
// }
const choices = () => {
    choiceField.style.display = `flex`
}

// //event listeners pg 1 index
if (window.location.pathname === `/index.html`) {
    letsGrow.addEventListener(`click`, startGame)
    openModal.addEventListener(`click`, startModal)
    closeModal.addEventListener(`click`, startClose)
}
//eventlisteners pg 2
if (window.location.pathname === `/p2.html`) {
    openEventModal.addEventListener(`click`, modal)
    //closeEventModal.addEventListener(`click`, close)
    closeEventModal.addEventListener(`click`, choices)
}

document.addEventListener('DOMContentLoaded', () => {
    const restartGame = document.querySelector(`.restart`)
    restartGame.onclick = () => {
        location.assign('index.html')
    }
})

let decidGrowRate = document.querySelector(`#decid`)
let conifGrowRate = document.querySelector(`#conif`)
let unknownGrowRate = document.querySelector(`#unknown`)
const decisionDisplay = document.getElementById(`decision`)
const treeButtons = document.querySelectorAll(`.choicebtn`)
const buttonIDs = []

const selectedDecision = []
treeButtons.forEach((button) => {
    buttonIDs.push(button.id)

    button.addEventListener(`click`, () => {
        const treeType = button.id
        let treeDecision

        if (treeType === `decid`) {
            treeDecision = `decid`
        } else if (treeType === `conif`) {
            treeDecision = `coniferous`
        } else if (treeType === `unknown`) {
            treeDecision =`mystery`
        }
       selectedDecision.push(treeDecision)

        const url = new URL('p2.html', window.location.href);
        url.searchParams.set('decision', selectedDecision.join(','));
        window.location.href = url.href;
        console.log(selectedDecision)
    })
})
document.addEventListener('DOMContentLoaded', () => {
    const decisionDisplay = document.getElementById('decision');
    const params = new URLSearchParams(window.location.search);
    const decisionString = params.get('decision');
    console.log(decisionString)
    console.log(params)
    const decision = decisionString ? decisionString.split(',') : [];
    console.log(decision)
    decisionDisplay.textContent = `You selected: ${decision}`
  });
  
  



//stats
const currentYear = document.getElementById(`year`)
const currentSeason = document.getElementById(`season`)
const currentHeight = document.getElementById(`height`)
const currentStr = document.getElementById(`sturdiness`)
//these
let yearIs = 0
let seasonIs = `Spring`
let heightIs = 1
let strIs = 1

currentYear.textContent = `It is year ${yearIs}`
currentSeason.textContent = `The time of year is ${seasonIs}`
currentHeight.textContent = `You are ${heightIs}cm tall`
currentStr.textContent = `Your sturdiness is ${strIs}`

