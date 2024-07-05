/*Defining variables and function to calculate area*/

let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
// document.getElementById ('length') gets value of HTML element by it's ID, which here is 'length'
//parsefloat(...) converts string into floating-point number
    let area = length * width;

    document.getElementById('result').innerText= `The area of the rectangle is: ${area}`;
}
// DO NOT USE QUOTES('), instead use backticks(`) present on the top-left corner
// .innerText changes the text content of the accessed element
// $(xyz) contains lets a js variable into a str