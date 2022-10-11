var sample = document.getElementById("sampleproducts");
for (var i = 0; i < 12; i++) {
  let div = document.createElement("div");
  div.setAttribute("class", "div");
  let img = document.createElement("img");
  let h4 = document.createElement("h4");
  let price = document.createElement("p");
  img.setAttribute("src", "./images/1st.png");
  h4.innerText = "Ear ring";
  price.innerText = "$20";
  div.append(img, h4, price);
  sample.append(div);
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
  img.setAttribute("src", "./images/1st.png");
  childDiv.append(img);
  feed.append(childDiv);
  if (i == 0) childDiv.setAttribute("id", "twoRowsCols");
}
