class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

// console.log(numberButtons)
let currentOperand = '0';
let previousOperand = '';
let operation; 

numberButtons.forEach((button) => {
    button.addEventListener('click' , () => {
        // console.log(button.textContent);
        if (currentOperand === '0') {
            currentOperand = '';
        }
        
        currentOperand += button.textContent;
        if (currentOperand === '.') {
            currentOperand = '0.';
        }
        output(currentOperand , previousOperand);
        // console.log(currentOperand);
})
})
let operator;
operationButtons.forEach((button) => {
    button.addEventListener('click' , () => {
        // console.log(button.textContent);
        currentOperand += button.textContent;
        previousOperand = currentOperand;
        currentOperand = '';
        output(currentOperand , previousOperand);

        if (button.textContent === '/') {
            operator = '/'
        } else if (button.textContent === '*') {
            operator = '*'
        } else if (button.textContent === '+') {
            operator = '+'
        } else if (button.textContent === '-') {
            operator = '-'
        }
    })
})


deleteButton.addEventListener('click' , () => {
    if (previousOperand != '' && currentOperand.length === 0) {
        currentOperand = '';
    }
    if (currentOperand === '') {
        currentOperand = '0';
        previousOperand = '';
    }
    if (currentOperand !== '0') {
        currentOperand = currentOperand.slice(0,-1);
    }
    if (currentOperand === '' && previousOperand === '') {
        currentOperand = '0'
    }
    output(currentOperand , previousOperand);
    // console.log(currentOperand);
})


allClearButton.addEventListener('click' , () => {
    currentOperand = '0';
    previousOperand = '';
    // console.log(currentOperand);
    output(currentOperand , previousOperand);
} )

equalsButton.addEventListener('click', () => {
    if (operator === '/') {
        operation = parseFloat(previousOperand.slice(0,-1))/parseFloat(currentOperand);
        // console.log(parseFloat(currentOperand))
    }else if (operator === '*') {
        operation = parseFloat(previousOperand.slice(0,-1))*parseFloat(currentOperand);
    }else if (operator === '+') {
        operation = parseFloat(previousOperand.slice(0,-1))+parseFloat(currentOperand);
    }else if (operator === '-') {
        operation = parseFloat(previousOperand.slice(0,-1))-parseFloat(currentOperand);
    }
    output(operation , '');
    currentOperand = operation.toString();
    operator = '';
})

function output(current_operand, previous_operand) {
    currentOperandTextElement.textContent = current_operand;
    previousOperandTextElement.textContent = previous_operand;
}
