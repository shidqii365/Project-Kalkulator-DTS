const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
   calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
   if (currentNumber === '0'){
      currentNumber = number
   } else {
      currentNumber += number
   }
}

numbers.forEach((number) => {
   number.addEventListener("click", (event) => {
      inputNumber(event.target.value)
      updateScreen(currentNumber)
   })
})

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
   operator.addEventListener("click", (event) => {
      inputOperator(event.target.value)
   })
})

const inputOperator = (operator) => {
   if (calculationOperator === ''){
      prevNumber = currentNumber
   }
   calculationOperator = operator
   currentNumber = ''
}

const equalSign = document.querySelector(".equal-sign")

equalSign.addEventListener('click', () => {
   calculate()
   updateScreen(currentNumber)
})

const calculate = () => {
   let result = '0'
   switch(calculationOperator) {
      case "+":
         result = parseFloat(prevNumber) + parseFloat(currentNumber)
         break
      case "-":
         result = parseFloat(prevNumber) - parseFloat(currentNumber)
         break
      case "*":
         result = parseFloat(prevNumber) * parseFloat(currentNumber)
         break
      case "/":
         result = parseFloat(prevNumber) / parseFloat(currentNumber)
         break
      case "%":
         result = parseFloat(prevNumber) % parseFloat(currentNumber)
         break
      case "percentage":
         result = parseFloat(prevNumber) / 100 * parseFloat(currentNumber)
         break
      default:
         return
   }
   currentNumber = result.toString()
   calculationOperator = ''
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
   clearAll()
   updateScreen(currentNumber)
})

const clearAll = () => {
   prevNumber = ''
   calculationOperator = ''
   currentNumber = '0'
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
   inputDecimal(event.target.value)
   updateScreen(currentNumber)
})

inputDecimal = (dot) => {
   if (currentNumber.includes('.')){
      return
   }
   currentNumber += dot
}

const doublezero = document.querySelector('.double-zero')

doublezero.addEventListener('click', (event) =>{
   inputdbz(event.target.value)
   updateScreen(currentNumber)
})

inputdbz = (dbz) => {
   if(currentNumber === '00'){
      currentNumber = '0'
   }
   else if(currentNumber !== '0'){
      return
   } 
   else{
      currentNumber += dbz
   }

}
