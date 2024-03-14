const randomButtonNumber = document.getElementById("generate-number")
let arrayOfNumb = []
const extractedNum = []
numberExtraction = () => {
  const randomNumber = Math.ceil(Math.random() * 90)
  if (extractedNum.includes(randomNumber)) {
    console.log(randomNumber, "questo è gia uscito")
    alert("è gia auscito")
  } else {
    extractedNum.push(randomNumber)
    arrayOfNumb[randomNumber - 1].style.backgroundColor = "green"
  }
  console.log(extractedNum)
}
// generezione delle celle
const generateCells = () => {
  const tabellone = document.querySelector("#tabellone")
  tabellone.classList.add("tabellone")

  for (let i = 0; i < 90; i++) {
    const numberCellsDiv = document.createElement("div")
    numberCellsDiv.classList.add("numberscells")
    const numberCellsH3 = document.createElement("h3")
    numberCellsH3.innerText = i + 1
    arrayOfNumb.push(numberCellsDiv)
    numberCellsDiv.appendChild(numberCellsH3)
    tabellone.appendChild(numberCellsDiv)
  }
}
window.onload = () => {
  randomButtonNumber.addEventListener("click", numberExtraction)
  generateCells()
}
