/*
In this task you need to create a reset button which will reset the followers count code. For this you need to include:

One button to represent Reset Count in followers_count.html file.

Then create one function in followers_count.js file to reset count to 0.

Also use alert popup box method to show alert message which will say that the Followers count has been reset.
*/

let count = 0;

function increaseCount() {
  count++; // Increment the count by 1
  displayCount(); // Display the count
  checkCountValue();  //Check count value and display messages
}

function displayCount() {
document.getElementById('countDisplay').innerText=count; // Display the count in the HTML
}

function checkCountValue() {
  if (count === 10) {
    alert("Your Instagram post gained 10 followers! Congratulations!");
  } else if (count === 20) {
    alert("Your Instagram post gained 20 followers! Keep it up!");
  }
}

function resetCount(){
    count = 0;  // count === 0 does not work.... somehow?
    displayCount();
    displayReset();
}

function displayReset(){
    alert("Your Instagram followers have been reset to 0.");
}