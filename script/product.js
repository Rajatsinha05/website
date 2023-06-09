import nav from "../components/Nav.js";

let show = (data) => {
  console.log(data);
  document.getElementById("products").innerHTML = "";
  data.map((ele) => {
    let img = document.createElement("img");
    img.src = ele.image;
    let title = document.createElement("h3");
    title.innerHTML = ele.title;
    let price = document.createElement("p");
    price.innerHTML = ele.price * 5;
    let category = document.createElement("p");
    category.innerHTML = ele.category;
    let rating = document.createElement("p");
    rating.innerHTML = ele.rating.rate;
    let btn = document.createElement("button");
    btn.innerHTML = "Add to cart";
    let btn2 = document.createElement("button");
    btn2.innerHTML = "Buy Now";
    let divbtn = document.createElement("div");
    divbtn.append(btn, btn2);
    // divbtn.setAttributes("class","btns")
    let div = document.createElement("div");
    div.append(img, title, category, price, rating, divbtn);
    document.getElementById("products").append(div);

    btn.addEventListener("click", () => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      let exists = false;
      // checking for existing cart
      cart.map((item, idx) => {
        if (item.id == ele.id) {
          cart[idx].qty += 1;
          exists = true;
        }
      });

      if (!exists) {
        cart.push({ ...ele, qty: 1 });

        alert("added to cart");
      }

      localStorage.setItem("cart", JSON.stringify(cart));
    });
  });
};

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => show(data));

document.getElementById("nav").innerHTML = nav();


