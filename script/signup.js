document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  let user = {
    name: document.getElementById("name").value,
    password: document.getElementById("password").value,
    cpassword: document.getElementById("cpassword").value,
    number: document.getElementById("number").value,
    email:document.getElementById("email").value
  };

  localStorage.setItem("user", JSON.stringify(user));
  console.log(user);
});
