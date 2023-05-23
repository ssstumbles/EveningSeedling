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
const startClose =() => {
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
if (window.location.pathname ===`/index.html`) {
 letsGrow.addEventListener(`click`, startGame)
 openModal.addEventListener(`click`, startModal)
 closeModal.addEventListener(`click`, startClose)
}
//eventlisteners pg 2
if (window.location.pathname ===`/p2.html`) {
openEventModal.addEventListener(`click`, modal)
//closeEventModal.addEventListener(`click`, close)
closeEventModal.addEventListener(`click`, choices)
}
//restart or game over
document.addEventListener('DOMContentLoaded', () => {
    const restartGame = document.querySelector('.restart')
    restartGame.onclick = () => {
        location.assign('index.html')
    }
})


//choice buttons
const choiceButtons = document.querySelectorAll(`choicebtn`)
const selectedChoice = []
//p2 array function; move down when working
const handleChoice = (select) => {
    const selectedChoice = select.target.innerHTML
    decision.push(selectedChoice)
}

//p2 event listener; also move down when working
choiceButtons.forEach((button) => {
    button.addEventListener(`click`, handleChoice)
})
//p2fn also move
const hunker = choiceButtons[0]
const grow = choiceButtons [1]
const chill = choiceButtons [2]
console.log(choiceButtons)
