import nav from "../components/Nav.js";

document.getElementById("nav").innerHTML = nav();

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let totalprice = 0;
for (let i = 0; i < cart.length; i++) {
  totalprice += cart[i].price * cart[i].qty;
}

let temp=``
cart.map((item)=>{
temp+=`<div class="badge">Hot</div>
<div class="product-tumb">
  <img src=${item.image} alt="">
</div>
<div class="product-details">
  <span class="product-catagory">Women,bag</span>
  <h4><a href="">${item.title}</a></h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
  <div class="product-bottom-details">
    <div class="product-price"><small>$96.00</small>$${item.price}</div>
    <div class="product-links">
      <a href=""><i class="fa fa-heart"></i></a>
      <a href=""><i class="fa fa-shopping-cart"></i></a>

      
    </div>
  </div>
</div>`
})

document.querySelector(".product-card").innerHTML=temp

document.getElementById("price").innerHTML = `Total Price: ${totalprice}`;


