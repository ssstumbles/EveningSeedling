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
const endModal = document.getElementById(`end-demo`)
const statsField = document.querySelector(`.stats`)
const continueButton = document.getElementById(`continue`)
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
//end card
const thankYou = () => {
    endModal.style.display = `flex`
    statsField.style.display = `none`
}
// //event listeners pg 1 index
if (window.location.pathname === `/index.html`) {
    letsGrow.addEventListener(`click`, startGame)
    openModal.addEventListener(`click`, startModal)
    closeModal.addEventListener(`click`, startClose)
}
if (window.location.pathname === `/p2.html`) {
    openEventModal.addEventListener(`click`, modal)
    closeEventModal.addEventListener(`click`, choices)
}
if (window.location.pathname === `/p3.html`) {
    continueButton.addEventListener(`click`, thankYou)
}

document.addEventListener('DOMContentLoaded', () => {
    const restartGame = document.querySelector(`.restart`)
    restartGame.onclick = () => {
        location.assign('index.html')
    }
})
//tree decision
let decidSelect = document.querySelector(`#decid`)
let conifSelect = document.querySelector(`#conif`)
let unknownSelect = document.querySelector(`#unknown`)
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
        const url = new URL('p2.html', window.location.href)
        url.searchParams.set('decision', selectedDecision.join(`,`))
        window.location.href = url.href;
        console.log(selectedDecision)
    })
})
document.addEventListener('DOMContentLoaded', () => {
    const decisionDisplay = document.getElementById('decision')
    const params = new URLSearchParams(window.location.search)
    const decisionString = params.get('decision')
    console.log(decisionString)
    console.log(params)
    const decision = decisionString ? decisionString.split(`,`) : []
    console.log(decision)
    decisionDisplay.textContent = `You selected: ${decision}`
  })
  //fire 
  let hunkerDown = document.querySelector(`#hunker`)
  let growFast = document.querySelector(`#grow`)
  let chillOut = document.querySelector(`#chill`)
  const fireDisplay = document.getElementById(`fire-result`)
  const fireButtons = document.querySelectorAll(`.firechoicebtn`)
  const fireButtonIDs = []
  const fireDecision = []
  fireButtons.forEach((button) => {
      fireButtonIDs.push(button.id)
  
      button.addEventListener(`click`, () => {
          const fireChoice = button.id
          let fireResult
  
          if (fireChoice === `hunker`) {
              fireResult = `you made it through, a little stunted for your age the other trees tell you, but you are strong`
          } else if (fireChoice === `grow`) {
              fireResult = `too much too soon. your sapling trunk was not made to withstand this. your essence is scattered among the seeds battling the chart`
          } else if (fireChoice === `chill`) {
              fireResult =`those fires sure did challenge you, yet here you stand - unapolagetically average`
          }
         fireDecision.push(fireResult)
  
          const url = new URL('p3.html', window.location.href)
          url.searchParams.set('fire', fireDecision.join(`,`))
          window.location.href = url.href
          console.log(fireDecision)
      })
  })
  document.addEventListener('DOMContentLoaded', () => {
      const fireDisplay = document.getElementById('fire-result')
      const params = new URLSearchParams(window.location.search)
      const fireDecisionString = params.get(`fire`)
      console.log(fireDecisionString)
      console.log(params)
      const fire = fireDecisionString ? fireDecisionString.split(`,`) : []
      console.log(fire)
     fireDisplay.textContent = `${fire}`
    })
   
//fucking move these
const currentYear = document.getElementById(`year`)
const currentSeason = document.getElementById(`season`)
const currentHeight = document.getElementById(`height`)
const currentStr = document.getElementById(`sturdiness`)

let yearIs = 0
let seasonIs = `Spring`
let heightIs = 1
let strIs = 1

currentYear.textContent = `It is year ${yearIs}`
currentSeason.textContent = `The time of year is ${seasonIs}`
currentHeight.textContent = `You are ${heightIs}cm tall`
currentStr.textContent = `Your sturdiness is ${strIs}`
//up to here


  
  