# iOS Calculator in Pure Javascript

This is a calculator application built with HTML, CSS, and JavaScript.

## Table of Contents

- [Features](#features)
- [How to Use](#how-to-use)
- [Code Overview](#code-overview)
- [Future Improvements](#future-improvements)
- [License](#license)

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division.
- Interactive user interface with buttons for numbers 0-9 and arithmetic operators.
- Displays the result of the calculation.

## How to Use

1. Open the HTML file in a web browser.
2. Click the number and operator buttons to input your equation.
3. The result of the calculation will be displayed on the screen.

## Code Overview

The JavaScript code for this application works as follows:

- It first gets the `result` element from the DOM and initializes some variables.
- It then sets up event listeners for the number buttons. When a number button is clicked, it adds the number to the `equation` string and updates the `result` element.
- It also sets up an event listener for the 'C' button to clear the `equation` string and reset the `storedNumber` variable.

## Future Improvements

- Add support for floating point numbers.
- Improve error handling for invalid inputs.
- Add keyboard support for inputting equations.

## License

This project is licensed under the MIT License.
