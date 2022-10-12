var productsdiv = document.getElementById("products");
var cartArr = JSON.parse(localStorage.getItem("cart")) || [];
var productsArr = [
  {
    image: "./images/Stone Necklace.png",
    image1: "./images/Stone Necklace_1.png",
    name: "Stone Necklace",
    price: "$20",
  },
  {
    image: "./images/antigonenecklace.png",
    image1: "./images/antigonenecklace_1.png",
    name: "Antigone Necklace",
    price: "$18",
  },
  {
    image: "./images/blushnecklace.png",
    image1: "./images/blushnecklace_1.png",
    name: "Blush Necklace",
    price: "$25",
  },
  {
    image: "./images/starsnecklace.png",
    image1: "./images/starsnecklace_1.png",
    name: "Stars Layered Necklace",
    price: "$15",
  },
];
productsArr.map(function (ele) {
  var div = document.createElement("div");
  var pname = document.createElement("p");
  var price = document.createElement("p");
  var img = document.createElement("img");
  var cartbtn = document.createElement("button");
  cartbtn.addEventListener("click", function () {
    addToCart(ele);
  });
  cartbtn.innerText = "Add To Cart";

  img.setAttribute("src", ele.image);
  img.setAttribute("onmouseover", "newImg(this)");
  img.setAttribute("onmouseout", "oldImg(this)");

  pname.innerText = ele.name;
  price.innerText = ele.price;
  div.append(img, pname, price, cartbtn);
  productsdiv.append(div);
});

function newImg(x) {
  var source = event.target.getAttribute("src");
  var y = source.slice(0, source.length - 4);
  y = y + "_1.png";
  event.target.src = y;
}
function oldImg(x) {
  var source = event.target.getAttribute("src");
  var y = source.slice(0, source.length - 6);
  y = y + ".png";
  console.log(y);
  event.target.src = y;
}
function addToCart(ele) {
  cartArr.push(ele);
  localStorage.setItem("cart", JSON.stringify(cartArr));
}
