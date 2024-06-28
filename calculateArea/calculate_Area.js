let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
// document.getElementById ('length') gets value of HTML element by it's ID, which here is 'length'
//parsefloat(...) converts string into floating-point number
    let area = length * width;

    document.getElementById('result').innerText= 'The area of the rectangle is: ${area}';
// .innerText changes the text content of the accessed element
// $(xyz) contains lets a js variable into a string
}

