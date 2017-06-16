

// function editNodeText("Click Here", "thank you"){
//   var node=Contact.html.getElementById("phone");
// }

var emailText = document.getElementById('email');

var phoneButton = document.getElementById('end');
phoneButton.onclick = function() {
  alert(emailText.value + 'thanks!');
}
