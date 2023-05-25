// let hunkerDown = document.querySelector(`#hunker`)
// let growFast = document.querySelector(`#grow`)
// let chillOut = document.querySelector(`#chill`)
// const fireDisplay = document.getElementById(`fire-result`)
// const fireButtons = document.querySelectorAll(`.firechoicebtn`)
// const fireButtonIDs = []

// const fireDecision = []
// fireButtons.forEach((button) => {
//     fireButtonIDs.push(button.id)

//     button.addEventListener(`click`, () => {
//         const fireChoice = button.id
//         let fireResult

//         if (fireChoice === `hunker`) {
//             fireResult = `hunker down`
//         } else if (fireChoice === `grow`) {
//             fireResult = `grow fast`
//         } else if (fireChoice === `chill`) {
//             fireResult =`chill out`
//         }
//        fireDecision.push(fireResult)

//         const url = new URL('p3.html', window.location.href);
//         url.searchParams.set('fire', fireDecision.join(','));
//         window.location.href = url.href;
//         console.log(fireDecision)
//     })
// })
// document.addEventListener('DOMContentLoaded', () => {
//     const decisionDisplay = document.getElementById('decision');
//     const params = new URLSearchParams(window.location.search);
//     const decisionString = params.get('fire');
//     console.log(decisionString)
//     console.log(params)
//     const decision = decisionString ? decisionString.split(',') : [];
//     console.log(decision)
//     decisionDisplay.textContent = `You selected: ${fire}`
//   });
  
  