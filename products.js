var productsdiv = document.getElementById("products");
var cartArr = JSON.parse(localStorage.getItem("cart")) || [];
var productsArr = [
  {
    image: "./images/Stone Necklace.png",
    image1: "./images/Stone Necklace_1.png",
    name: "Stone Necklace",
    price: 20,
    category: "Necklace",
  },
  {
    image: "./images/antigonenecklace.png",
    image1: "./images/antigonenecklace_1.png",
    name: "Antigone Necklace",
    price: 18,
    category: "Necklace",
  },
  {
    image: "./images/blushnecklace.png",
    image1: "./images/blushnecklace_1.png",
    name: "Blush Necklace",
    price: 25,
    category: "Necklace",
  },
  {
    image: "./images/starsnecklace.png",
    image1: "./images/starsnecklace_1.png",
    name: "Stars Layered Necklace",
    price: 15,
    category: "Necklace",
  },
  {
    image: "./images/ambitionring.png",
    image1: "./images/ambitionring_1.png",
    name: "Ambition Ring",
    price: 25,
    category: "Ring",
  },
  {
    image: "./images/crabring.png",
    image1: "./images/crabring_1.png",
    name: "Crab Ring",
    price: 32,
    category: "Ring",
  },
  {
    image: "./images/roundring.png",
    image1: "./images/roundring_1.png",
    name: "Round Ring",
    price: 19,
    category: "Ring",
  },
  {
    image: "./images/dreamerring.png",
    image1: "./images/dreamerring_1.png",
    name: "Dreamer Ring",
    price: 20,
    category: "Ring",
  },
];
display(productsArr);
function display(productsArr) {
  productsdiv.innerHTML = "";
  productsArr.map(function (ele) {
    var div = document.createElement("div");
    var pname = document.createElement("p");
    var price = document.createElement("p");
    var img = document.createElement("img");
    var cartbtn = document.createElement("button");
    cartbtn.setAttribute("id", "cartbtn");
    cartbtn.addEventListener("click", function () {
      addToCart(ele);
    });
    cartbtn.innerText = "Add To Cart";

    img.setAttribute("src", ele.image);
    img.setAttribute("onmouseover", "newImg(this)");
    img.setAttribute("onmouseout", "oldImg(this)");

    pname.innerText = ele.name;
    price.innerText = "$" + ele.price;
    div.append(img, pname, price, cartbtn);
    productsdiv.append(div);
  });
}

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

document.getElementById("hoverPrice").addEventListener("mouseover", dropdown);
document
  .getElementById("filterbtn")
  .addEventListener("click", closedropdownAndSort);

function dropdown() {
  document.getElementById("dropdown").style.display = "block";
}
function closedropdownAndSort() {
  document.getElementById("dropdown").style.display = "none";
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;
  var filteredArr = productsArr.filter(function (ele) {
    if (from == false || to == false) return true;
    return ele.price >= from && ele.price <= to;
  });
  display(filteredArr);
}

function handelCategory() {
  var cat = document.getElementById("category").value;
  console.log(cat);
  var filteredArr = productsArr.filter(function (ele) {
    if (cat == false) return true;
    return ele.category == cat;
  });
  display(filteredArr);
}
