import nav from "../components/Nav.js";

document.getElementById("nav").innerHTML = nav();

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let totalprice = 0;
for (let i = 0; i < cart.length; i++) {
  totalprice += cart[i].price * cart[i].qty;
}

document.getElementById("price").innerHTML = `Total Price: ${totalprice}`;


