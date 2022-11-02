//Button Evnet Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //Input
  let username = document.getElementById("username").value.toLowerCase();
  let password = +document.getElementById("password").value;

  //If Statment - Test the Input
  if (username === "admin" && password === 1234) {
    let msg = "Login Succesful";
    alert(msg);
  } else if (password === 1234) {
    let msg = "Invalid Username";
    alert(msg);
  } else {
    let msg = "Invalid Password";
    alert(msg);
  }
}
