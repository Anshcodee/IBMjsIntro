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

function endTest(){
    endTime = new Date().getTime();

    //Disable further input
    document.getElementById("userInput").readOnly= true;

    // Calculate time elapsed and Words per minute(WPM)
    var timeElapsed = (endTime - startTime)/1000 //in seconds
    var userTypedText = document.getElementById("userInput").value;

    //Split the text using regex to count words correctly
    var typedwords = userTypedText.split(/\s+/).filter(function(word){
        return word !=="";
    }).length
    // \s+ identifies all whitespaces(space, tabs,etc...)

    var wpm = 0; //A default value

    if(timeElapsed!==0 && !isNaN(typedwords)){
        wpm = Math.round((typedWords/timeElapsed)*60);
    }

    // Display result
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing Test results: </h2><hr><br>"+
    "<p> Words Typed: "+ typedwords + "</p>"+
    "<p>Time Elapsed: "+timeElapsed.toFixed(2)+"seconds</p>"
    //toFixed(x) gives a decimal value having x decimal digits
    "<p>Words per Minute(WPM): "+ wpm +"</p>";

    //Resetting the button
    var button = document.getElementById("btn");
    button,innerHTML = "Start Test";
    button.onclick = startTest;
}