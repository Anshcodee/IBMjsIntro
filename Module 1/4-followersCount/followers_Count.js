/*In this lab, you will create a functional follower counter for an Instagram post and simulate the increase in followers. 
You will grasp the fundamentals of managing a count variable to simulate a follower count on a social media platform like Instagram. 
You will understand the basic principles of managing state (the follower count),
updating UI elements dynamically, and triggering actions based on certain conditions in JavaScript.
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
