console.log(`working`)

const letsGrow = document.getElementByClassName(`start`)
const treeIntro = document.getElementById(`treeintro`)
//initial buttons
const decid = document.getElementById(`decid`)
const conif = document.getElementById(`conif`)
const unknown = document.getElementById(`unknown`)

//functions
const startGame = () => {
    treeIntro.style.display = block
}

//event listener
letsGrow.onCLick = startGame