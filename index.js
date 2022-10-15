var sample = document.getElementById("sampleproducts");
var loginUser = JSON.parse(localStorage.getItem("loginUser"));
if (loginUser) document.getElementById("user").innerText = loginUser.firstName;
document.getElementById("user").style.fontSize = "smaller";
document.getElementById("user").style.color = "grey";

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
  {
    image: "./images/breadedbracelet.png",
    image1: "./images/breadedbracelet_1.png",
    name: "Breaded Bracelet",
    price: 30,
    category: "Bracelet",
  },
  {
    image: "./images/cuffbracelet.png",
    image1: "./images/cuffbracelet_1.png",
    name: "Cuff Bracelet",
    price: 28,
    category: "Bracelet",
  },
  {
    image: "./images/maiokibracelet.png",
    image1: "./images/maiokibracelet_1.png",
    name: "Maioki Bracelet",
    price: 18,
    category: "Bracelet",
  },
  {
    image: "./images/dropearring.png",
    image1: "./images/dropearring.png",
    name: "Drop Earring",
    price: 18,
    category: "Earring",
  },
  {
    image: "./images/flareearing.png",
    image1: "./images/flareearing_1.png.png",
    name: "Flare Earring",
    price: 38,
    category: "Earring",
  },
  {
    image: "./images/hoopearring.png",
    image1: "./images/hoopearring_1.png.png",
    name: "Hoop Earring",
    price: 24,
    category: "Earring",
  },
  {
    image: "./images/coiledearing.png",
    image1: "./images/coiledearing_1.png.png",
    name: "Coiled Earring",
    price: 14,
    category: "Earring",
  },
];
for (var i = 0; i < 8; i++) {
  let div = document.createElement("div");
  div.setAttribute("class", "div");
  let img = document.createElement("img");
  img.setAttribute("hover-img", "hover-img");
  img.setAttribute("onmouseover", "newImg(this)");
  img.setAttribute("onmouseout", "oldImg(this)");
  let item = document.createElement("p");
  let price = document.createElement("p");
  img.setAttribute("src", productsArr[i].image);
  item.innerText = productsArr[i].name;
  price.innerText = "$" + productsArr[i].price;
  div.append(img, item, price);
  sample.append(div);
}

// function newImg(x) {
//   x.src = "./images/1st.png";

//   console.log(x);
// }

// function oldImg(x) {
//   x.src = "./images/1st_a.png";
//   console.log(x);
// }
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

var feed = document.querySelector("#feedimages1");

for (var i = 0; i < 7; i++) {
  var childDiv = document.createElement("div");
  var img = document.createElement("img");
  img.setAttribute("src", "./images/hoopearring.png");
  childDiv.append(img);
  feed.append(childDiv);
  if (i == 3) childDiv.setAttribute("id", "twoRowsCols");
}
var feed = document.querySelector("#feedimages2");

for (var i = 0; i < 7; i++) {
  var childDiv = document.createElement("div");
  var img = document.createElement("img");
  img.setAttribute("src", "./images/coiledearing.png");
  childDiv.append(img);
  feed.append(childDiv);
  if (i == 0) childDiv.setAttribute("id", "twoRowsCols");
}
