var userArr = JSON.parse(localStorage.getItem("user")) || [];
document.getElementById("btn").addEventListener("click", verifyUser);
var flag = false;

function verifyUser() {
  var emailinput = document.getElementById("email").value;
  var passwordinput = document.getElementById("password").value;
  for (var i = 0; i < userArr.length; i++) {
    console.log(userArr[i].email);
    if (userArr[i].email == emailinput) {
      flag = true;
      if (userArr[i].password == passwordinput) {
        localStorage.setItem("loginUser", JSON.stringify(userArr[i]));
        window.alert("login successful");
      } else {
        window.alert("invalid password");
      }
    }
    if (flag) break;
  }
}
