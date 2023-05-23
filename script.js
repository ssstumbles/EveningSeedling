console.log(`working`)

const letsGrow = document.getElementById(`start`)
const treeIntro = document.getElementById(`treeintro`)
const introBlock = document.getElementById(`intro`)
//about trees modal
const openModal = document.querySelector(`.open-modal`)
const modalText = document.getElementById(`tree-modal`)
const closeModal = document.getElementById(`close`)
//tree choice buttons
const decid = document.getElementById(`decid`)
const conif = document.getElementById(`conif`)
const unknown = document.getElementById(`unknown`)

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
const modal = () => {
    modalText.style.display = `flex`
}
const close =() => {
    modalText.style.display = `none`
}
//part 2 - tree choice


// //event listener
 letsGrow.addEventListener(`click`, startGame)
 openModal.addEventListener(`click`, modal)
 closeModal.addEventListener(`click`, close)

// //choice event listeners
// decid.addEventListener(`click`, decidStats)
// conif.addEventListener(`click`, conifStats)
// unknown.addEventListener(`click`, unknownStats)
//write object for question
//each question/answer set is a button