var inps = document.getElementsByClassName("inpu");
var moy = document.getElementById("moy");
console.log(inps);
function calcul() {
  let s = 0;
  for (let i = 0; i < inps.length; i++) {
    s = s + parseInt(inps[i].value) / 5;
  }
  return (moy.innerHTML = s);
  console.log(s);
}

function validateForm(e) {
  e.preventDefault();
  var name = document.loginForm.name.value;
  var password = document.loginForm.password.value;
  if (name.length == 0) return alert(`name is required`);
  if (password.length < 5) return alert(`password length should more than 5`);
}
