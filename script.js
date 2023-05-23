console.log(`working`)

const letsGrow = document.getElementById(`start`)
const treeIntro = document.getElementById(`treeintro`)
const introBlock = document.getElementById(`intro`)
//about trees modal
const openModal = document.querySelector(`.open-modal`)
const modalText = document.getElementById(`tree-modal`)
const closeModal = document.getElementById(`close`)
//event modal
const openEventModal = document.querySelector(`.modal`)
const eventModalText = document.querySelector(`.event-modal`)
const closeEventModal = document.getElementById(`close-modal`)
//choice buttons !NOT ADDED IN HTML YET
const choiceButtons = document.querySelector(`.choice`)
//tree choice buttons
const decid = document.getElementById(`decid`)
const conif = document.getElementById(`conif`)
const unknown = document.getElementById(`unknown`)
//restart or game over

//functions
//part 1
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
    choiceButtons.style.display = `none`
}
const modal = () => {
    eventModalText.style.display = `flex`
}
// const close = () => {
//     eventModalText.style.display = `none`
// }
const choices = () => {
    choiceButtons.style.display = `flex`
}

// //event listeners pg 1 index
if (window.location.pathname ===`/index.html`) {
 letsGrow.addEventListener(`click`, startGame)
 openModal.addEventListener(`click`, startModal)
 closeModal.addEventListener(`click`, startClose)
}
console.log(letsGrow)
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
// //choice event listeners
// decid.addEventListener(`click`, decidStats)
// conif.addEventListener(`click`, conifStats)
// unknown.addEventListener(`click`, unknownStats)
//write object for question
//each question/answer set is a button