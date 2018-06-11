// Rewrite of JS functionality - Dom manipulation

// Basic storage variables and functions for calculator

const calculator = {
    memory: 0,
    storedFunction: "",
    screen: "",
    add:        val => { this.memory += val; },
    subtract:   val => { this.memory -= val; },
    times:      val => { this.memory = this.memory * val; },
    divide:     val => { this.memory = this.memory / val; },
}

// DOM Elements used:
const numberButtons = document.querySelectorAll(".number");
const functionButtons = document.querySelectorAll(".function");
const calcScreen = document.getElementById('entry');

// Write out function
const writeToScreen = () => {
   calcScreen.textContent = calculator.screen;
}    

// Adding functionality to number buttons
    // on click concat number to screen variable
    // write out to screen
numberButtons.forEach( (el) => {
    el.addEventListener('click', 
        () => {
            calculator.screen += el.textContent;
            writeToScreen();
        });
});

// Adding functionality to function keys
    // if clear button, clear all variables
    // if equals button, run memory number (1) with function and number on screen (2), store result in memory
    // else store number and function
functionButtons.forEach( (el) => {
    el.addEventListener('click', () => {
        if ( el.id == "clear" ) {
            calculator.memory = 0;
            calculator.storedFunction = ""; 
            calculator.screen = "";
        } else if ( el.id == "equals" ) {
            let method = calculator.storedFunction;
            let secondNumber = parseInt(calculator.screen);
            eval(`calculator.${method}(${secondNumber})`);
            calculator.screen = calculator.memory;
        } else {
            calculator.memory = parseInt(calculator.screen);
            calculator.storedFunction = el.id;
            calculator.screen = "";
        }
        writeToScreen();        
    });
});



