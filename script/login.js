document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  let user = JSON.parse(localStorage.getItem("user"));

  console.log(user);

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email == user.email && password == user.password) {
    alert("logged in");
    window.location.href = "/website/index.html";
  } else {
    alert("Invalid");
  }
});
