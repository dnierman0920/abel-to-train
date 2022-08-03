// This file holds custom functions

// this function allows the attribute "d" to be changed when "aria-expanded" boolean changes
// The d attribute defines a path to be drawn.
function changeD(buttonId, pathId, pathDrawnA, pathDrawnB){
  const button = document.getElementById(buttonId)
  const path = document.getElementById(pathId)
  let expanded = button.getAttribute("aria-expanded")
  let d = path.getAttribute("d")
  if (expanded == "true"){
    path.setAttribute("d", pathDrawnA)
  }
  else {
    path.setAttribute("d", pathDrawnB)
  }
}