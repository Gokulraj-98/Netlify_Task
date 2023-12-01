document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents the form from submitting and refreshing the page

  // Get form values
  var Firstname = document.getElementById("Firstname").value;
  var Middlename = document.getElementById("Middlename").value;
  var Lastname = document.getElementById("Lastname").value;
  var email = document.getElementById("email").value;
  var Password = document.getElementById("password").value;

  console.log(
    `Fullname : ${Firstname}${Middlename} ${Lastname} 
Email: ${email}
Password : ${Password}`
  );
});
