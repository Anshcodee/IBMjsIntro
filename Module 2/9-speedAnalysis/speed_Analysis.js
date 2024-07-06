/*
In this lab, you will engage in string methods to create type testing functionality, 
enhancing their typing speed and accuracy and gaining insights into JavaScript's interaction with HTML elements. 
By practicing common phrases and receiving immediate feedback on metrics like words typed and words per minute (WPM), 
users can track their progress and identify areas for improvement.
*/
let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest(){
    //Set the test text
    document.getElementById("inputText").innerHTML = testText;

    //Reset (previous?) results and the timer
    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();
    //just keep note of the Date() and .getTime() functions

    // Change the button text and functionality
    var button = document.getElementById("btn");
    button.innerHTML = "End Test"
    button.onclick = endTest;
    
}