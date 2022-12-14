//  ####################################################################
//                              FORM  FUNCTIONS                              
// #####################################################################

// function recaptchaResponseData(response){
//   console.log("response: ", typeof response)
//   if (typeof response !== "undefined"){
//     return true
//   }
//   else{
//     return false
//   }
// }



//  ####################################################################
//                              DOM MANIPULATION                             
// #####################################################################

function addTrainingAccordionDropDownListeners(){
    // https://stackoverflow.com/questions/67942262/how-to-change-an-svg-image-after-onclick
  const upArrow = "M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
  const downArrow = "M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"
  const trainingOfferings = {
                  'privateTraining':"privateTrainingArrow",
                  'smallGroupTraining':'smallGroupTrainingArrow',
                  'semiPrivateTraining':'semiPrivateTrainingArrow',
                  'nutritionCoaching':'nutritionCoachingArrow',
                  'functionalMovementLivingWithAutoImmuneDiseases':'functionalMovementLivingWithAutoImmuneDiseasesArrow',
                  'sportsRehabAndInjuryPrevention':'sportsRehabAndInjuryPreventionArrow',
                  'trainingForOlderAdults':'trainingForOlderAdultsArrow',
              }
  // add event listeners to change the up and down arrow
  for (const [key, value] of Object.entries(trainingOfferings)){
    let element  = document.getElementById(key)
    element.addEventListener("click", function(){
      changeD(key, value, downArrow, upArrow)
    })
  }
}

// this function allows the attribute "d" to be changed when "aria-expanded" boolean changes
// The d attribute defines a path to be drawn.
function changeD(buttonId, pathId, pathDrawnA, pathDrawnB){
  const button = document.getElementById(buttonId)
  const path = document.getElementById(pathId)
  let expanded = button.getAttribute("aria-expanded")
  if (expanded == "true"){
    path.setAttribute("d", pathDrawnA)
  }
  else {
    path.setAttribute("d", pathDrawnB)
  }
};