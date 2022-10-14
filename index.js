var sample = document.getElementById("sampleproducts");
var loginUser = JSON.parse(localStorage.getItem("loginUser"));
if (loginUser) document.getElementById("user").innerText = loginUser.firstName;
document.getElementById("user").style.fontSize = "smaller";
document.getElementById("user").style.color = "grey";
for (var i = 0; i < 8; i++) {
  let div = document.createElement("div");
  div.setAttribute("class", "div");
  let img = document.createElement("img");
  img.setAttribute("hover-img", "hover-img");
  img.setAttribute("onmouseover", "newImg(this)");
  img.setAttribute("onmouseout", "oldImg(this)");
  let item = document.createElement("p");
  let price = document.createElement("p");
  img.setAttribute("src", "./images/1st_a.png");
  item.innerText = "Ear ring";
  price.innerText = "$20";
  div.append(img, item, price);
  sample.append(div);
}

function newImg(x) {
  x.src = "./images/1st.png";

  console.log(x);
}

function oldImg(x) {
  x.src = "./images/1st_a.png";
  console.log(x);
}

var feed = document.querySelector("#feedimages1");

for (var i = 0; i < 7; i++) {
  var childDiv = document.createElement("div");
  var img = document.createElement("img");
  img.setAttribute("src", "./images/1st.png");
  childDiv.append(img);
  feed.append(childDiv);
  if (i == 3) childDiv.setAttribute("id", "twoRowsCols");
}
var feed = document.querySelector("#feedimages2");

for (var i = 0; i < 7; i++) {
  var childDiv = document.createElement("div");
  var img = document.createElement("img");
  img.setAttribute("src", "./images/2nd.png");
  childDiv.append(img);
  feed.append(childDiv);
  if (i == 0) childDiv.setAttribute("id", "twoRowsCols");
}
