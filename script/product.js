let show=(data)=>{
    console.log(data);
    document.getElementById("products").innerHTML=""
data.map((ele)=>{
let img=document.createElement("img")
img.src=ele.image
let title=document.createElement("h3")
title.innerHTML=ele.title
let price=document.createElement("p")
price.innerHTML=ele.price*5
let category=document.createElement("p")
category.innerHTML=ele.category
let rating=document.createElement("p")
rating.innerHTML=ele.rating.rate
let btn=document.createElement("button")
btn.innerHTML="Add to cart"
let btn2=document.createElement("button")
btn2.innerHTML="Buy Now"
let divbtn=document.createElement("div")
divbtn.append(btn,btn2)
// divbtn.setAttributes("class","btns")
let div=document.createElement("div") 
div.append(img,title,category,price,rating,divbtn)  
document.getElementById("products").append(div)

})
}




fetch('https://fakestoreapi.com/products')
.then((response)=>response.json())
.then((data)=>show(data));
