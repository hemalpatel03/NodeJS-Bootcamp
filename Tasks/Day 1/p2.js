// Problem 2: Variables (var and const)

// Create a JavaScript program to calculate the area of a rectangle. Ask the user for the length and width of the rectangle and store them in variables. Calculate and display the area using the formula: `area = length * width`.

const length = parseFloat(prompt("Enter the length of the rectangle:"));
const width = parseFloat(prompt("Enter the width of the rectangle:"));
const area = length * width;
console.log("The area of the rectangle is:", area);