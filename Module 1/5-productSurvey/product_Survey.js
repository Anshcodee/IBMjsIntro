const username = document.getElementById('name').value;
const age = document.getElementById('age').value;
const email = document.getElementById('email').value;
const job = document.getElementById('job').value;
const designation = document.getElementById('designation').value;
const feedback = document.getElementById('feedbackText').value;
const submitButton=document.getElementById('submitBtn');

function submitFeedback(){
    const productType = document.getElementById('productType').value;
    alert('Thank you for your valuable feedback.');
}

submitButton.onclick = () =>{
    submitFeedback();
}

document.addEventListener('keydown', function(event) {
   if (event.key === 'Enter') {
     submitFeedback();
   }
 });
 