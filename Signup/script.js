var userArr = JSON.parse(localStorage.getItem("user")) || [];
document.getElementById("btn").addEventListener("click", addUser);

function addUser() {
  var userobj = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  userArr.push(userobj);
  localStorage.setItem("user", JSON.stringify(userArr));
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  alert("Hurray! Account created");
}
